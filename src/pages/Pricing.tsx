
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600">
          Choose the plan that works best for you
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Basic",
            price: "29",
            features: [
              "Up to 5 lockboxes",
              "Basic key tracking",
              "Mobile app access",
              "Email support",
            ],
          },
          {
            title: "Professional",
            price: "99",
            popular: true,
            features: [
              "Up to 20 lockboxes",
              "Advanced tracking",
              "Priority support",
              "API access",
              "Custom branding",
            ],
          },
          {
            title: "Enterprise",
            price: "299",
            features: [
              "Unlimited lockboxes",
              "24/7 support",
              "Custom integration",
              "Dedicated account manager",
              "Advanced analytics",
            ],
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white p-8 rounded-lg shadow-lg ${
              plan.popular
                ? "ring-2 ring-keygo-orange scale-105 relative"
                : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-keygo-orange text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-keygo-orange mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-keygo-orange hover:bg-keygo-orange/90"
                  : "bg-gray-800 hover:bg-gray-900"
              } text-white`}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
