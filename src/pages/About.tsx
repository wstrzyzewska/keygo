
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About KEYGO</h1>
        
        <div className="prose lg:prose-xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            KEYGO is revolutionizing key management and lockbox rental services for
            real estate professionals and property managers. Our mission is to make
            property access secure, efficient, and hassle-free.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-keygo-orange">
            Who We Serve
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "Real Estate Agents & Brokers 🏡",
              "Property Managers & Building Administrators 🏢",
              "Short-Term Rental Hosts 🏠",
              "Landlords & Real Estate Investors 📈",
              "Property Management Companies 🏗",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
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
                {item}
              </motion.li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-keygo-orange">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Security First",
                description:
                  "We prioritize the security of your properties and keys above all else.",
              },
              {
                title: "Innovation",
                description:
                  "Continuously improving our technology to serve you better.",
              },
              {
                title: "Reliability",
                description:
                  "Dependable service you can count on, 24/7.",
              },
              {
                title: "Customer Focus",
                description:
                  "Your success is our success. We're here to support you.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
