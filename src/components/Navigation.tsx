import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from 'react-icons/hi';
import { RiSparklingFill } from 'react-icons/ri';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-moving opacity-30 blur-xl group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-moving rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <RiSparklingFill className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-bold gradient-text gradient-text-animate">
                EDIGHT
              </span>
              <span className="text-[8px] md:text-[10px] text-muted-foreground tracking-wider uppercase">
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
                className="relative px-4 py-2 text-foreground/70 hover:text-foreground transition-all font-medium group"
                activeClassName="text-primary"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </NavLink>
            ))}
            <Button asChild variant="default" className="ml-4 bg-gradient-moving hover:scale-105 shadow-hover btn-glow transition-all duration-300">
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50 animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all py-3 px-4 rounded-lg font-medium"
                activeClassName="text-primary bg-primary/5"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className="w-full bg-gradient-moving hover:scale-105 shadow-hover btn-glow transition-all duration-300">
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
