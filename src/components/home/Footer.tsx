
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-keygo-orange mr-2" />
                <span>+1 (416) 937-5397</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-keygo-orange mr-2" />
                <span>info@keygosystems.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="hover:text-keygo-orange transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-keygo-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-keygo-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} KEYGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
