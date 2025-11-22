import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as radius from "radius";
import * as dgram from "dgram";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

// RADIUS server configuration
const RADIUS_CONFIG = {
  host: "192.168.1.170",
  port: 1812,
  secret: "omadaSharedSecret123",
  timeout: 5000, // 5 seconds
};

async function authenticateWithRadius(username: string, password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const packet = radius.encode({
      code: "Access-Request",
      secret: RADIUS_CONFIG.secret,
      attributes: [
        ["NAS-IP-Address", "0.0.0.0"],
        ["User-Name", username],
        ["User-Password", password],
      ],
    });

    const client = dgram.createSocket("udp4");
    const timeout = setTimeout(() => {
      client.close();
      reject(new Error("RADIUS server timeout"));
    }, RADIUS_CONFIG.timeout);

    client.on("message", (msg) => {
      clearTimeout(timeout);
      client.close();

      try {
        const response = radius.decode({
          packet: msg,
          secret: RADIUS_CONFIG.secret,
        });

        if (response.code === "Access-Accept") {
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(error);
      }
    });

    client.on("error", (error) => {
      clearTimeout(timeout);
      client.close();
      reject(error);
    });

    client.send(packet, 0, packet.length, RADIUS_CONFIG.port, RADIUS_CONFIG.host);
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // RADIUS Authentication endpoint
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);

      // Authenticate with RADIUS server
      const isAuthenticated = await authenticateWithRadius(username, password);

      if (isAuthenticated) {
        res.json({ 
          success: true, 
          message: "Access granted",
          sessionTimeout: 3600 // 1 hour in seconds
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "Access denied: Invalid credentials" 
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid request format" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "RADIUS server communication error. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
