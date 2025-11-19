import { Target, Eye, Award, Users, Lightbulb, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BrandName } from "@/components/BrandName";

const About = () => {
  const visionIcons = [Lightbulb, Users, Target, Award, Heart, Sparkles];

  const values = [
    { icon: Award, title: "Integrity", description: "We operate with honesty and transparency in all our dealings" },
    { icon: Target, title: "Innovation", description: "Constantly pushing boundaries to deliver cutting-edge solutions" },
    { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality in everything we do" },
    { icon: Users, title: "Security", description: "Protecting your data and systems with robust security measures" },
    { icon: Users, title: "Empowerment", description: "Building capacity and skills in the next generation" },
  ];

  const founders = [
    {
      name: "Mantsie Senyane Bright",
      role: "Co-Founder & Technical Director",
      description: (
        <>
          Leading technical strategy and innovation at <BrandName inline size="xs" />
        </>
      )
    },
    {
      name: "Edgar Tshwarelo Moloantoa",
      role: "Co-Founder & Operations Director",
      description: "Overseeing operations and business development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="about" className="relative pt-32 md:pt-40 pb-16 bg-gradient-to-br from-secondary/30 to-background scroll-mt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating vision icons */}
        {visionIcons.map((Icon, index) => {
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
            <h1 className="text-4xl md:text-5xl font-bold">About <BrandName variant="gradient" size="lg" /></h1>
            <p className="text-xl text-muted-foreground">
              A visionary IT solutions company at the intersection of technology, innovation, and empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-card border-border">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    <BrandName inline size="xs" /> is a visionary IT solutions company based in Pretoria, Gauteng. 
                    Founded by Mantsie Senyane Bright and Edgar Tshwarelo Moloantoa, the company operates 
                    at the intersection of technology, innovation, and empowerment.
                  </p>
                  <p>
                    We specialize in hardware solutions, software and app development, security technologies, 
                    IT consulting, and networking systems. Our mission is to empower individuals, businesses, 
                    and communities through modern, secure, and transformative technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become one of Africa's leading forces in IT innovation and digital security, 
                  empowering a new generation of thinkers and creators.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  To design and deliver cutting-edge hardware, software, and security solutions that 
                  elevate efficiency, safety, and digital progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/50"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero group-hover:scale-110 transition-all">
                      <Icon className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="font-semibold text-xl">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visionary leaders driving innovation and empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-hero mx-auto flex items-center justify-center text-3xl font-bold">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-cyan-400 animate-glow">{founder.name}</h3>
                    <p className="text-cyan-300 font-medium mb-3">{founder.role}</p>
                    <div className="text-gray-300 text-sm">{founder.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
