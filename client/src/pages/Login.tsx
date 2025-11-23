import { motion } from "framer-motion";
import { Wifi, Globe, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,100,255,0.15)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" /%3E%3C/svg%3E')" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl relative z-10"
      >
        <Card className="border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Wifi className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-4xl font-heading tracking-wide">Welcome to Biningu Networks</CardTitle>
            <CardDescription className="text-lg mt-4">
              You're now connected to our secure network
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-primary/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">High-Speed Internet</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy fast and reliable connectivity
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-primary/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Secure Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with enterprise-grade security
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-primary/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our team is always here to help you
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                You can now browse the internet freely and securely.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center border-t border-white/5 pt-6 space-y-2">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Biningu Networks. All rights reserved.
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}