
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Building, BuildingIcon, BriefcaseIcon, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          <div className="flex items-center justify-center gap-1 mb-4">
            <img 
              src="/img/keygo-logo.png" 
              alt="KeyGO Logo" 
              className="h-32 w-auto"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              in Action
            </h2>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay tuned for the demo tutorial
          </h2>
        </div>
        {/* <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/M6j4b_w1h9Q"
            title="KeyGo Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div> */}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clients we serve
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Trusted by property management companies and residential buildings across the country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto rounded-full bg-keygo-orange/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <BuildingIcon className="h-8 w-8 text-keygo-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Residential Buildings</h3>
                <p className="text-gray-600">
                  Serving luxury condominiums and apartment complexes to streamline resident and visitor access.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto rounded-full bg-keygo-orange/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-keygo-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Property Management</h3>
                <p className="text-gray-600">
                  Helping property managers oversee multiple buildings with centralized access control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
