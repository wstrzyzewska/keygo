
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Motion, Presence } from "@motionone/dom";
import { Key, Lock, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Smart Key Management</span>
                <span className="block text-keygo-orange">for Modern Real Estate</span>
              </h1>
            </Motion>
            
            <Motion
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Streamline your property access with secure, intelligent lockbox solutions. Perfect for real estate professionals and property managers.
              </p>
            </Motion>

            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Motion
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
              </Motion>
              
              <Motion
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
              </Motion>
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
                <Motion
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
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
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
