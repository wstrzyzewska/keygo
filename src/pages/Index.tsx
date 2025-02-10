
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/img/keygo-logo.png" 
              alt="KeyGO Logo" 
              className="h-10 w-auto"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              in Action
            </h2>
          </div>
        </div>
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/M6j4b_w1h9Q"
            title="KeyGo Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;
