import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaCode, FaNetworkWired } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "Hardware Solutions", icon: FaCode },
    { name: "Software Development", icon: FaCode },
    { name: "Security Technologies", icon: MdSecurity },
    { name: "IT Consulting", icon: FaNetworkWired },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-diagonal" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                EDIGHT
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Technology & Innovation
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses through innovative IT solutions and cutting-edge technology across South Africa and beyond.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-moving flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group btn-glow"
                    aria-label={social.name}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <Icon size={18} className="group-hover:rotate-12 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-hero rounded-full" />
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/training", label: "Training" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-300 hover:text-primary transition-all duration-300 group flex items-center gap-2 w-fit"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  <HiArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-hero rounded-full" />
              Our Services
            </h4>
            <ul className="flex flex-col space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-gray-300 text-sm group cursor-pointer hover:text-primary transition-colors"
                    data-testid={`item-service-${index}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gradient-moving transition-all duration-300 group-hover:scale-110 btn-glow">
                      <Icon size={14} className="group-hover:rotate-12 transition-transform" />
                    </div>
                    <span>{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-hero rounded-full" />
              Contact Us
            </h4>
            <div className="flex flex-col space-y-4 text-gray-300 text-sm">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-moving transition-all duration-300 btn-glow">
                  <HiLocationMarker size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-white mb-1">Location</p>
                  <span>Pretoria, Gauteng<br />South Africa</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-moving transition-all duration-300 btn-glow">
                  <HiPhone size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:0711578316" className="hover:text-primary transition-colors">071 157 8316</a>
                    <a href="tel:0724476949" className="hover:text-primary transition-colors">072 447 6949</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-moving transition-all duration-300 btn-glow">
                  <HiMail size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:EDGARBRIGHTGROUP@GMAIL.COM"
                    className="hover:text-primary transition-colors break-words text-xs"
                    data-testid="link-email"
                  >
                    EDGARBRIGHTGROUP@GMAIL.COM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              &copy; {currentYear} edight (PTY). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-primary transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors" data-testid="link-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
