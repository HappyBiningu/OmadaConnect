import { TechHero } from "@/components/TechHero";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Wifi, 
  Smartphone, 
  Laptop, 
  Unlock, 
  Code, 
  SmartphoneCharging, 
  BrainCircuit, 
  BarChart3,
  Globe,
  Cpu
} from "lucide-react";

export default function Dashboard() {
  const hardwareServices = [
    {
      title: "iPhone Bypass & Unlock",
      description: "Professional iCloud removal and network unlocking services for iPhone devices. Safe, secure, and reliable restoration.",
      icon: Unlock,
      accent: "primary" as const
    },
    {
      title: "Hardware Repair",
      description: "Expert repair services for iPhones and MacBooks. Screen replacements, battery swaps, and logic board diagnostics.",
      icon: Cpu,
      accent: "primary" as const
    },
    {
      title: "Gadget Trading",
      description: "Buy, sell, and trade-in premium devices. Competitive rates for your used iPhones, MacBooks, and high-end gadgets.",
      icon: Smartphone,
      accent: "primary" as const
    }
  ];

  const digitalServices = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From scalable backends to robust desktop applications.",
      icon: Code,
      accent: "secondary" as const
    },
    {
      title: "App Development",
      description: "Native mobile and responsive web applications built with modern frameworks. iOS, Android, and Cross-platform solutions.",
      icon: Globe,
      accent: "secondary" as const
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of AI. Custom machine learning models, predictive analytics, and intelligent automation for your business.",
      icon: BrainCircuit,
      accent: "secondary" as const
    },
    {
      title: "Business Analytics",
      description: "Data-driven insights and strategic consulting to optimize your operations and drive growth.",
      icon: BarChart3,
      accent: "secondary" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <TechHero />

      {/* Hardware Services Section */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Hardware <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium repair, unlock, and trading services for your Apple devices. 
            Restoring functionality and value to your hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hardwareServices.map((service, idx) => (
            <ServiceCard
              key={idx}
              {...service}
              delay={idx * 0.1}
              accentColor="primary"
            />
          ))}
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Digital <span className="text-secondary">Intelligence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Next-generation software and analytics services. 
              Building the future with code, data, and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                {...service}
                delay={idx * 0.1}
                accentColor="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                TECH<span className="text-primary">HUB</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Connecting you to the future of hardware and software.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground/50 font-mono">
            SYSTEM STATUS: ONLINE • LATENCY: 12ms • SECURE CONNECTION
          </div>
        </div>
      </footer>
    </div>
  );
}
