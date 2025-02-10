
import { motion } from "framer-motion";
import { Key, Lock, Shield } from "lucide-react";

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

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
