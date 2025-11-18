import { Link } from "react-router-dom";
import { ArrowRight, Shield, Laptop, Code, Network, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const services = [
    {
      icon: Laptop,
      title: "Hardware Solutions",
      description: "Top-quality laptops, printers, and IT equipment for your business needs.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software and mobile applications tailored to your requirements.",
    },
    {
      icon: Shield,
      title: "Security Technologies",
      description: "CCTV, access control, and IoT security solutions for complete protection.",
    },
    {
      icon: Network,
      title: "IT Consulting",
      description: "Expert guidance for system integration and IT infrastructure planning.",
    },
  ];

  const values = [
    { icon: Shield, title: "Integrity", description: "Honest and transparent in all we do" },
    { icon: Award, title: "Excellence", description: "Committed to delivering quality" },
    { icon: Users, title: "Empowerment", description: "Building the next generation" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Technology background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Africa Through
              <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
                Innovative IT Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              EDGAR BRIGHT GROUP delivers cutting-edge technology, security, and software solutions 
              to businesses across South Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-hover">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16 md:py-24 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions designed to elevate your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Leading IT Innovation in South Africa
              </h2>
              <p className="text-muted-foreground text-lg">
                Founded by visionaries Mantsie Senyane Bright and Edgar Tshwarelo Moloantoa, 
                EDGAR BRIGHT GROUP stands at the intersection of technology, innovation, and empowerment.
              </p>
              <p className="text-muted-foreground">
                Our mission extends beyond providing excellent IT services—we're committed to 
                developing the next generation of tech professionals through our in-service training 
                and internship programs.
              </p>
              <Button asChild className="bg-gradient-hero hover:opacity-90">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2" size={20} /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-border shadow-card">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your success forward
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-hover">
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2" size={20} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
