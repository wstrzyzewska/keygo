
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-lg text-gray-600">
          Discover how KEYGO revolutionizes key management
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Smart Key Access",
            description:
              "Access lockboxes securely via mobile apps with real-time tracking",
          },
          {
            title: "Secure Tracking",
            description:
              "Automated check-in/out system with instant notifications",
          },
          {
            title: "Lockbox Rentals",
            description:
              "Flexible rental options with integrated payment processing",
          },
          {
            title: "Role Management",
            description: "Granular access control for different user roles",
          },
          {
            title: "Audit Logging",
            description: "Detailed activity logs for security and compliance",
          },
          {
            title: "Mobile Ready",
            description: "Access your keys anywhere with our mobile apps",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-keygo-orange">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
