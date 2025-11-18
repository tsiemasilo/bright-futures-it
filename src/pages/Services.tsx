import { Laptop, Code, Shield, Network, Wrench, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "Hardware Supply and Maintenance",
      description: "We provide top-quality laptops, printers, and accessories from leading brands. Our maintenance services ensure your hardware performs optimally throughout its lifecycle.",
      features: [
        "Latest laptops and workstations",
        "Multi-function printers and scanners",
        "Computer accessories and peripherals",
        "Regular maintenance and support",
        "Hardware upgrades and repairs"
      ]
    },
    {
      icon: Code,
      title: "Software & Mobile App Development",
      description: "Custom software solutions and mobile applications tailored to your business needs. We build scalable, secure, and user-friendly applications that drive results.",
      features: [
        "Custom software development",
        "iOS and Android mobile apps",
        "Web application development",
        "API development and integration",
        "Software maintenance and updates"
      ]
    },
    {
      icon: Shield,
      title: "Security Technologies",
      description: "Comprehensive security solutions to protect your premises and digital assets. From physical security to cybersecurity, we've got you covered.",
      features: [
        "CCTV surveillance systems",
        "Access control systems",
        "IoT security solutions",
        "Network security implementation",
        "Security audits and consulting"
      ]
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
      ]
    },
    {
      icon: Wrench,
      title: "Networking and Infrastructure Setup",
      description: "Build a robust and reliable IT infrastructure for your organization. We design, install, and maintain network systems that support your business growth.",
      features: [
        "Network design and installation",
        "Server setup and configuration",
        "Cloud infrastructure migration",
        "Network monitoring and management",
        "Disaster recovery planning"
      ]
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
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
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
                  className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{feature}</span>
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
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Elevate Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300">
              Let our experts help you choose the right solutions for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-hover">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
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
