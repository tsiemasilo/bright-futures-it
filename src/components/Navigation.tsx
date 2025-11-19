import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import edightLogo from '@/assets/edight-logo.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Only blend with background on home page
  const isHomePage = location.pathname === '/';

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

  // Determine if navbar should be transparent (only on home page when not scrolled)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent
        ? "bg-transparent backdrop-blur-sm border-b border-white/5"
        : "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft" 
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src={edightLogo} 
              alt="Edight Logo" 
              className="h-12 md:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300 tracking-wide">
              Edight
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 transition-all font-medium group ${
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/70 hover:text-foreground" 
                }`}
                activeClassName={isTransparent ? "text-cyan-400" : "text-primary"}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute inset-0 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  isTransparent ? "bg-white/10" : "bg-primary/5"
                }`}></span>
              </NavLink>
            ))}
            <Button asChild variant="default" className={`ml-4 hover:scale-105 shadow-hover btn-glow transition-all duration-300 ${
              isTransparent
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0"
                : "bg-gradient-moving" 
            }`}>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-primary/10" 
            }`}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 space-y-2 border-t animate-fade-in ${
            isTransparent ? "border-white/10" : "border-border/50"
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block transition-all py-3 px-4 rounded-lg font-medium ${
                  isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary/5" 
                }`}
                activeClassName={isTransparent ? "text-cyan-400 bg-white/10" : "text-primary bg-primary/5"}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className={`w-full hover:scale-105 shadow-hover btn-glow transition-all duration-300 ${
              isTransparent
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0"
                : "bg-gradient-moving" 
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
