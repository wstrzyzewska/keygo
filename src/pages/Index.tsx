
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Key, Lock, Shield, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Smart Key Management</span>
                <span className="block text-keygo-orange">for Modern Real Estate</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Streamline your property access with secure, intelligent lockbox solutions. Perfect for real estate professionals and property managers.
              </p>
            </motion.div>

            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button
                  asChild
                  className="bg-keygo-orange hover:bg-keygo-orange/90 text-white px-8 py-3 text-base font-medium rounded-md"
                >
                  <Link to="/features">Get Started</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="mt-3 sm:mt-0 sm:ml-3 px-8 py-3 text-base font-medium rounded-md"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-keygo-orange font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to manage keys
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <feature.icon className="h-8 w-8 text-keygo-orange mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-keygo-orange font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <Phone className="h-12 w-12 text-keygo-orange" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">
                +1 (555) 123-4567
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <Mail className="h-12 w-12 text-keygo-orange" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">
                contact@keygo.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <MapPin className="h-12 w-12 text-keygo-orange" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-base text-gray-500">
                123 Smart Street,<br />
                Tech City, TC 12345
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-keygo-orange mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-keygo-orange mr-2" />
                  <span>contact@keygo.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-keygo-orange mr-2" />
                  <span>123 Smart Street, Tech City, TC 12345</span>
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
                  <Link to="/pricing" className="hover:text-keygo-orange transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-keygo-orange transition-colors">
                    About Us
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
    </div>
  );
};

const features = [
  {
    name: "Smart Access Control",
    description: "Grant and manage access to properties with our advanced key management system.",
    icon: Key,
  },
  {
    name: "Secure Lockboxes",
    description: "State-of-the-art lockboxes with real-time monitoring and tracking.",
    icon: Lock,
  },
  {
    name: "Audit & Compliance",
    description: "Comprehensive logging and reporting for all key activities.",
    icon: Shield,
  },
];

export default Index;
