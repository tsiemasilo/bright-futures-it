import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from 'react-icons/hi';
import { RiSparklingFill } from 'react-icons/ri';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft" 
        : "bg-transparent backdrop-blur-sm border-b border-white/5"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`absolute inset-0 opacity-30 blur-xl group-hover:opacity-40 transition-opacity ${
                isScrolled ? "bg-gradient-moving" : "bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}></div>
              <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                isScrolled ? "bg-gradient-moving" : "bg-gradient-to-r from-cyan-500 to-blue-600"
              }`}>
                <RiSparklingFill className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-display font-bold transition-colors ${
                isScrolled ? "gradient-text gradient-text-animate" : "text-white"
              }`}>
                EDIGHT
              </span>
              <span className={`text-[8px] md:text-[10px] tracking-wider uppercase transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/60"
              }`}>
                Technology & Innovation
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 transition-all font-medium group ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
                activeClassName={isScrolled ? "text-primary" : "text-cyan-400"}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute inset-0 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  isScrolled ? "bg-primary/5" : "bg-white/10"
                }`}></span>
              </NavLink>
            ))}
            <Button asChild variant="default" className={`ml-4 hover:scale-105 shadow-hover btn-glow transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-moving" 
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0"
            }`}>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "text-foreground hover:bg-primary/10" 
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 space-y-2 border-t animate-fade-in ${
            isScrolled ? "border-border/50" : "border-white/10"
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block transition-all py-3 px-4 rounded-lg font-medium ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground hover:bg-primary/5" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                activeClassName={isScrolled ? "text-primary bg-primary/5" : "text-cyan-400 bg-white/10"}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className={`w-full hover:scale-105 shadow-hover btn-glow transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-moving" 
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0"
            }`}>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
