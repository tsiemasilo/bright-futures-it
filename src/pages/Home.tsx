import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech-bg.jpg";
import { FaRocket, FaShieldAlt, FaUsers, FaAward, FaCheckCircle, FaLaptopCode, FaLayerGroup, FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { HiLightningBolt, HiTrendingUp, HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import { RiSparklingFill } from 'react-icons/ri';
import { Rocket, Globe, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";

const Home = () => {
  const servicesIcons = [Rocket, Globe, Zap, Shield, TrendingUp, Sparkles, Rocket, Globe, Zap, Shield, TrendingUp, Sparkles, Rocket, Globe];

  const services = [
    {
      icon: FaLaptopCode,
      title: "Hardware Solutions",
      description: "Top-quality laptops, printers, and IT equipment for your business needs.",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
    },
    {
      icon: FaLayerGroup,
      title: "Software Development",
      description: "Custom software and mobile applications tailored to your requirements.",
      gradient: "from-slate-600 via-slate-700 to-slate-800",
    },
    {
      icon: HiShieldCheck,
      title: "Security Technologies",
      description: "CCTV, access control, and IoT security solutions for complete protection.",
      gradient: "from-zinc-600 via-zinc-700 to-zinc-800",
    },
    {
      icon: FaChartLine,
      title: "IT Consulting",
      description: "Expert guidance for system integration and IT infrastructure planning.",
      gradient: "from-neutral-600 via-neutral-700 to-neutral-800",
    },
  ];

  const values = [
    { 
      icon: FaShieldAlt, 
      title: "Integrity", 
      description: "Honest and transparent in all we do",
      color: "text-blue-500"
    },
    { 
      icon: FaAward, 
      title: "Excellence", 
      description: "Committed to delivering quality",
      color: "text-amber-500"
    },
    { 
      icon: FaUsers, 
      title: "Empowerment", 
      description: "Building the next generation",
      color: "text-emerald-500"
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", icon: FaCheckCircle },
    { value: "100+", label: "Happy Clients", icon: FaUsers },
    { value: "15+", label: "Years Experience", icon: HiTrendingUp },
    { value: "24/7", label: "Support Available", icon: FaRocket },
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
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-transparent" />
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-xl" data-testid="badge-innovation">
              <RiSparklingFill className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Innovation in Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'}}>
              Empowering Africa Through
              <span className="block text-primary mt-4" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8), 0 0 40px rgba(59, 130, 246, 0.5)'}}>
                Innovative IT Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)'}}>
              EDGAR BRIGHT GROUP delivers cutting-edge technology, security, and software solutions 
              to businesses across South Africa and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-moving hover:scale-105 shadow-hover group btn-glow transition-all duration-300" data-testid="button-explore-services">
                <Link to="/services">
                  Explore Services 
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300" data-testid="button-get-in-touch">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-moving-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float-diagonal" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center space-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`stat-${index}`}
                >
                  <Icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="relative py-16 md:py-24 bg-secondary/30 scroll-mt-20 overflow-hidden">
        {/* Floating icons */}
        {servicesIcons.map((Icon, index) => {
          const positions = [
            { top: '5%', left: '5%' },
            { top: '15%', right: '8%' },
            { top: '25%', left: '12%' },
            { top: '35%', right: '15%' },
            { top: '45%', left: '8%' },
            { top: '55%', right: '10%' },
            { top: '65%', left: '15%' },
            { top: '75%', right: '12%' },
            { top: '12%', left: '20%' },
            { top: '28%', right: '5%' },
            { top: '42%', left: '3%' },
            { top: '58%', right: '18%' },
            { top: '72%', left: '10%' },
            { top: '88%', right: '6%' }
          ];
          return (
            <div 
              key={index}
              className="absolute opacity-15 text-primary animate-float"
              style={{
                ...positions[index],
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${3 + (index * 0.4)}s`
              }}
            >
              <Icon size={56} />
            </div>
          );
        })}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4" data-testid="badge-services">
              <HiLightningBolt className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
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
                  className="group relative overflow-hidden hover:shadow-hover transition-all duration-500 border-border hover:border-primary/50 animate-fade-in shimmer-effect"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`card-service-${index}`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardContent className="p-6 space-y-4 relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg animate-gradient-wave`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-medium">Learn more</span>
                      <HiArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button asChild variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300" data-testid="button-view-all-services">
              <Link to="/services">
                View All Services 
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Floating icons for About section - themed icons */}
        {[
          { Icon: FaShieldAlt, position: { top: '12%', left: '8%' } },
          { Icon: FaAward, position: { top: '25%', right: '15%' } },
          { Icon: FaUsers, position: { top: '65%', left: '10%' } },
          { Icon: FaRocket, position: { top: '40%', right: '8%' } },
          { Icon: FaLightbulb, position: { top: '78%', right: '12%' } },
          { Icon: Sparkles, position: { top: '55%', left: '6%' } },
          { Icon: FaHandshake, position: { top: '88%', left: '14%' } },
          { Icon: TrendingUp, position: { top: '18%', right: '6%' } }
        ].map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div 
              key={`about-${index}`}
              className="absolute opacity-12 text-primary animate-float"
              style={{
                ...item.position,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${4 + (index * 0.4)}s`
              }}
            >
              <IconComponent size={52} />
            </div>
          );
        })}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4" data-testid="badge-about">
                <HiTrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About Us</span>
              </div>
              
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
              <Button asChild className="bg-gradient-moving hover:scale-105 group btn-glow transition-all duration-300" data-testid="button-learn-more">
                <Link to="/about">
                  Learn More About Us 
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-slide-left">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border-border shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden"
                    data-testid={`card-value-${index}`}
                  >
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`${value.color} group-hover:rotate-12 transition-transform duration-500`} size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{value.title}</h3>
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
      <section className="py-16 md:py-24 bg-gradient-moving-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-diagonal" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FaRocket className="w-16 h-16 mx-auto mb-6 text-white drop-shadow-lg animate-bounce-subtle" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your success forward
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-hover group hover:scale-110 btn-glow transition-all duration-300" data-testid="button-contact-us">
            <Link to="/contact">
              Contact Us Today 
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
