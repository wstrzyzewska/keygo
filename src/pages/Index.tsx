
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See KeyGo in Action
          </h2>
        </div>
        <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/M6j4b_w1h9Q"
            title="KeyGo Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
