
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
