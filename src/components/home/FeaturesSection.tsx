import { motion } from "framer-motion";
import { Lock, Shield, BarChart, Hammer } from "lucide-react";

const features = [
  {
    name: "Providing enhanced security to buildings",
    description: "With KeyGo, the need for individual lock boxes is gone. Real estate agents, unit owners and visitors will conduct key transfer through the centralized, secure KeyGo platform.",
    icon: Lock,
  },
  {
    name: "Reporting & tracking real-time data.",
    description: "The KeyGo portal will allow property managers to view live activity data & reports for key exchanges through the KeyGo platform.",
    icon: BarChart,
  },
  {
    name: "Community rules enforcement.",
    description: "The centralized KeyGo system will assist property managers in securely controlling access to the building premises, and enforcement of building policies (e.g. real estate agent access policies, short-term rental policies, etc.).",
    icon: Shield,
  },
  {
    name: "Assisting in property upkeep.",
    description: "By centralizing key exchange through KeyGo, cluttered, unattended lock boxes in building common areas will no longer exist, and will be replaced with the sleek design of the KeyGo digital lockbox.",
    icon: Hammer,
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-keygo-orange font-semibold tracking-wide uppercase">The KeyGO Solution</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to manage access
          </p>
        </div>
        <p className="mt-6 text-xl text-base text-gray-500 sm:text-xl text-center">
            By leveraging the latest software and hardware technologies in the industry, KeyGo supports clients by:
          </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
