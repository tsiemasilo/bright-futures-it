import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EDIGHT
            </h3>
            <p className="text-gray-300 text-sm">
              Empowering businesses through innovative IT solutions and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">
                Training
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="flex flex-col space-y-2 text-gray-300 text-sm">
              <li>Hardware Solutions</li>
              <li>Software Development</li>
              <li>Security Technologies</li>
              <li>IT Consulting</li>
              <li>Network Infrastructure</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-gray-300 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>Pretoria, Gauteng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span>071 157 8316</span>
                  <span>072 447 6949</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <a 
                  href="mailto:EDGARBRIGHTGROUP@GMAIL.COM"
                  className="hover:text-primary transition-colors break-all"
                >
                  EDGARBRIGHTGROUP@GMAIL.COM
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EDGAR BRIGHT GROUP (PTY). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
