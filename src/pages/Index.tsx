
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ContactInfoSection from "@/components/home/ContactInfoSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Index;
