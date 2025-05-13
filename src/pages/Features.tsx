
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const lockboxImages = [
    {
      title: "Smart Lockbox - Front View",
      description: "Our sleek and modern digital lockbox with secure touchscreen interface.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Lockbox - Interior",
      description: "Organized key storage system with LED indicators for easy identification.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Lockbox - In Use",
      description: "Authorized personnel accessing the digital lockbox in a real-world setting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mobile App Integration",
      description: "Control and monitor your lockbox remotely with our intuitive mobile application.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">KeyGO Hardware</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our innovative digital lockbox solution provides secure, 
          automated key management with real-time tracking and remote access control.
        </p>
      </motion.div>

      {/* Hero Hardware Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            alt="KeyGO Digital Lockbox"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Lockbox</h2>
              <p className="text-base md:text-lg">
                The most advanced digital lockbox solution for secure and efficient key management.
              </p>
            </div>
          </div>
        </AspectRatio>
      </motion.div>

      {/* Lockbox Showcase Carousel */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Lockbox Gallery</h2>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {lockboxImages.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="object-cover w-full h-full transition-all hover:scale-105 duration-700"
                      />
                    </AspectRatio>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>

{/* Mobile App Section with Customizable Phone Image */}
<motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center ml-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mobile Control</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-keygo-orange text-white grid place-items-center">1</span>
                <div>
                  <h3 className="font-semibold text-xl">Secure Authentication</h3>
                  <p className="text-gray-600">Biometric security and encrypted access protocols.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-keygo-orange text-white grid place-items-center">2</span>
                <div>
                  <h3 className="font-semibold text-xl">Real-time Tracking</h3>
                  <p className="text-gray-600">Always know which keys are checked out and by whom.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-keygo-orange text-white grid place-items-center">3</span>
                <div>
                  <h3 className="font-semibold text-xl">Instant Notifications</h3>
                  <p className="text-gray-600">Get alerted when keys are accessed or returned.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-keygo-orange text-white grid place-items-center">4</span>
                <div>
                  <h3 className="font-semibold text-xl">Remote Authorization</h3>
                  <p className="text-gray-600">Grant temporary access to contractors or staff as needed.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            {/* Decorative background gradient */}
            <div className="absolute -top-6 -bottom-6 -left-6 -right-6 bg-gradient-to-br from-keygo-orange/10 to-transparent rounded-2xl -z-10"></div>
            
            {/* Mobile phone container - you can control the phone image here */}
            <div className="mx-auto max-w-[300px]">
              {/* Phone frame - adjust border, shadow, etc. here */}
              <div className="border-8 border-gray-800 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Phone screen - control the screen content image here */}
                <AspectRatio ratio={9/16} className="bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=900&q=80"
                    alt="KeyGO Mobile App"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                
                {/* Optional: Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-6">Experience KeyGO Digital Lockbox Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Ready to revolutionize your key management system? Contact us for a personalized demo
          and consultation for your property.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-keygo-orange hover:bg-keygo-orange/90 text-white px-8 py-3 rounded-md font-medium">
            Request Demo
          </a>
          <a href="/about" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
