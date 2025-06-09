
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoSection = () => {
  return (
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

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
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
              +1 (416) 937-5397
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
              info@keygosystems.com
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
