
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
            KEYGO is revolutionizing key management for
            real estate professionals and property managers. Our mission is to make
            property access secure, efficient, and hassle-free.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-keygo-orange">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          The team behind KeyGo has been involved in various property services in the residential sector for 20+ years. This experience has led us to identify integral needs of residential communities, be it condominium corporations, or residential buildings. Such needs revolve around the key principles of security, efficiency and upkeep, all of which the KeyGo platform aims to resolve.
          <br />
          <br />
          At a simple glance, KeyGo is a key management platform. KeyGo’s full functionality however, offers a much more nuanced solution. 
          <br />
          <br />
          Access control is one of the key aspects of safety and security in residential communities. Unauthorized and/or unmonitored access to the property can lead to unfavourable situations in these communities. KeyGo serves to add another layer of security, by centralizing property access through a single, secure, digital platform that allows tracking of all access events. 
          <br />
          <br />
          Conventionally,  key exchange in residential properties is conducted through physical lock boxes, placed by real estate agents/owners in building common areas (e.g. stairwells). This practice is often unmonitored, and outside of the knowledge of building management.
          <br />
          <br />
          Filtering key exchange through the KeyGo platform provides residential communities with superior control over property access, which is further enhanced by the real-time tracking and reporting functionality of the KeyGo software. Building administration no longer needs to manually and actively track physical lockboxes around the premises, which is a time consuming and inefficient process.
          <br />
          <br />
          KeyGo also supports building residents, by providing an efficient solution to them for key exchange to any parties that may be servicing their individual units (e.g. maids, dog walkers, babysitters, etc.).
          <br />
          <br />
          This is the KeyGo solution – a client focussed approach, with needs of the community at the forefront.

          </p>
          <h2 className="text-2xl font-semibold mb-4 text-keygo-orange">
            Who We Serve
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "Property Managers & Building Administrators 🏢",
              "Landlords & Residents 🏠",
              "Real Estate Agents & Brokers 🏡",
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
                  "Continuously implementing the latest technology solutions to serve you better.",
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
