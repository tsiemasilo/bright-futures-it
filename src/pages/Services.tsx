import { MonitorSmartphone, Code2, ShieldCheck, Network, Server, Cloud, Database, Cpu, Smartphone, Globe, Lock, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Hardware Supply and Maintenance",
      description: "We provide top-quality laptops, printers, and accessories from leading brands. Our maintenance services ensure your hardware performs optimally throughout its lifecycle.",
      features: [
        "Latest laptops and workstations",
        "Multi-function printers and scanners",
        "Computer accessories and peripherals",
        "Regular maintenance and support",
        "Hardware upgrades and repairs"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-500/5"
    },
    {
      icon: Code2,
      title: "Software & Mobile App Development",
      description: "Custom software solutions and mobile applications tailored to your business needs. We build scalable, secure, and user-friendly applications that drive results.",
      features: [
        "Custom software development",
        "iOS and Android mobile apps",
        "Web application development",
        "API development and integration",
        "Software maintenance and updates"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-500/5"
    },
    {
      icon: ShieldCheck,
      title: "Security Technologies",
      description: "Comprehensive security solutions to protect your premises and digital assets. From physical security to cybersecurity, we've got you covered.",
      features: [
        "CCTV surveillance systems",
        "Access control systems",
        "IoT security solutions",
        "Network security implementation",
        "Security audits and consulting"
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgPattern: "bg-emerald-500/5"
    },
    {
      icon: Network,
      title: "IT Consulting and System Integration",
      description: "Expert guidance to optimize your IT infrastructure. We help businesses make informed technology decisions and seamlessly integrate systems.",
      features: [
        "IT strategy and planning",
        "System architecture design",
        "Technology assessment",
        "Digital transformation consulting",
        "Vendor selection and management"
      ],
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-orange-500/5"
    },
    {
      icon: Server,
      title: "Networking and Infrastructure Setup",
      description: "Build a robust and reliable IT infrastructure for your organization. We design, install, and maintain network systems that support your business growth.",
      features: [
        "Network design and installation",
        "Server setup and configuration",
        "Cloud infrastructure migration",
        "Network monitoring and management",
        "Disaster recovery planning"
      ],
      gradient: "from-indigo-500 to-blue-500",
      bgPattern: "bg-indigo-500/5"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing to enhance flexibility, scalability, and cost-efficiency. We help you migrate to and manage cloud platforms.",
      features: [
        "Cloud migration services",
        "Cloud hosting and management",
        "Backup and disaster recovery",
        "Cloud security implementation",
        "Multi-cloud strategy"
      ],
      gradient: "from-sky-500 to-cyan-500",
      bgPattern: "bg-sky-500/5"
    }
  ];

  const techIcons = [Database, Cpu, Smartphone, Globe, Lock, Zap];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="services" className="relative pt-32 md:pt-40 pb-16 bg-gradient-to-br from-secondary/30 to-background scroll-mt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating tech icons */}
        {techIcons.map((Icon, index) => {
          const positions = [
            { top: '15%', left: '12%' },
            { top: '30%', right: '15%' },
            { top: '65%', left: '10%' },
            { top: '80%', right: '12%' },
            { top: '50%', left: '8%' },
            { top: '40%', right: '10%' }
          ];
          return (
            <div 
              key={index}
              className="absolute opacity-5 animate-float"
              style={{
                ...positions[index],
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + (index * 0.5)}s`
              }}
            >
              <Icon size={48} />
            </div>
          );
        })}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4" data-testid="badge-services">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Comprehensive Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions designed to elevate your business operations and drive digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden hover:shadow-hover transition-all duration-500 border-border hover:border-primary/50 animate-fade-in shimmer-effect"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`card-service-${index}`}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 ${service.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`} />
                  </div>
                  
                  <CardContent className="p-8 space-y-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6 space-y-3">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start space-x-3 text-sm group/item animate-fade-in"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}>
                              <CheckCircle2 size={12} className="text-white" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 animate-bounce-subtle">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Elevate Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300">
              Let our experts help you choose the right solutions for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-hover group" data-testid="button-request-consultation">
                <Link to="/contact">
                  Request a Consultation
                  <Zap className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark" data-testid="button-learn-more-about">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
