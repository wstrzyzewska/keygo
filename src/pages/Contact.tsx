
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Contact Us</span>
            <span className="block text-keygo-orange">Get in Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We're here to help and answer any questions you might have
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Phone",
              content: "+1 (555) 123-4567",
              delay: 0.1
            },
            {
              icon: Mail,
              title: "Email",
              content: "contact@keygo.com",
              delay: 0.2
            },
            {
              icon: MapPin,
              title: "Address",
              content: "123 Smart Street,\nToronto, ON, 12345",
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: item.delay,
                type: "spring",
                stiffness: 100
              }}
              className="text-center"
            >
              <div className="flex justify-center">
                <item.icon className="h-12 w-12 text-keygo-orange" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base text-gray-500 whitespace-pre-line">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-keygo-orange focus:ring-keygo-orange"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-keygo-orange focus:ring-keygo-orange"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-keygo-orange focus:ring-keygo-orange"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-keygo-orange text-white py-2 px-4 rounded-md hover:bg-keygo-orange/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
