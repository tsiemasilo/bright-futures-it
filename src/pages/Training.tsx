import { GraduationCap, Users, Briefcase, Award, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-collab.jpg";

const Training = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Internship Programs",
      description: "Structured internship opportunities for students and recent graduates to gain practical experience in IT.",
      duration: "3-12 months"
    },
    {
      icon: Briefcase,
      title: "In-Service Training",
      description: "Hands-on training programs that bridge the gap between academic knowledge and industry requirements.",
      duration: "6-12 months"
    },
    {
      icon: Users,
      title: "Mentorship & Guidance",
      description: "One-on-one mentorship from experienced professionals to guide career development in technology.",
      duration: "Ongoing"
    },
    {
      icon: Award,
      title: "Skills Certification",
      description: "Industry-recognized certifications in various IT disciplines to enhance employability.",
      duration: "Varies"
    }
  ];

  const skillAreas = [
    "Software Development",
    "Network Administration",
    "Cybersecurity",
    "Hardware Maintenance",
    "System Integration",
    "Mobile App Development",
    "Cloud Technologies",
    "IT Project Management"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Industry-Ready Skills",
      description: "Gain practical experience with real-world projects and modern technologies"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Build connections with industry professionals and fellow trainees"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access opportunities for permanent employment and career advancement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Social Empowerment & Training
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the next generation of IT professionals through hands-on experience and mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Empowering Youth Through Technology
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Recognizing South Africa's high youth unemployment rate, EDGAR BRIGHT GROUP is 
                  committed to developing the next generation of IT professionals through comprehensive 
                  in-service training and internship programs.
                </p>
                <p>
                  Our goal is to provide hands-on experience and mentorship to students and graduates, 
                  bridging the gap between education and industry readiness. We believe in creating 
                  opportunities that transform lives and build sustainable careers in technology.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={teamImage} 
                alt="Team collaboration" 
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-dark/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to prepare you for a successful career in IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/50"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills You'll Learn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gain expertise in high-demand technology areas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillAreas.map((skill, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-card transition-all border-border hover:border-primary/50"
                >
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-sm">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Train With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The advantages of choosing EDGAR BRIGHT GROUP for your IT career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center shadow-card border-border">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              Start Your IT Career Journey Today
            </h2>
            <p className="text-xl text-gray-300">
              Join our training programs and take the first step toward a successful career in technology
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-hover">
              <Link to="/contact">Apply for Training</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
