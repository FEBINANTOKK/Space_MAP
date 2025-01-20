import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://th.bing.com/th/id/OIP.hPmHUCChpzXgXJ0zQ1iZrgHaEw?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Wp78-VZidXlpdORh0HlAEAHaEa?w=1024&h=610&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.f7c0a77e75f1c84c35eee9dece6e4130?rik=mTRwflbwUQ2CXg&riu=http%3a%2f%2fcontent.ktvb.com%2fphoto%2f2017%2f09%2f06%2f2017_09_03-22.04.38.040-CDT_1504720386705_10680609_ver1.0.jpg&ehk=nQ3iA0e3iPbbE2t4JHh0XQIy3abyfqaJWcM7iUMp8I8%3d&risl=&pid=ImgRaw&r=0",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6 text-center space-y-10">
      {/* Banner Section */}
      <motion.div
        className="relative bg-blue-600 text-white py-16 px-6 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Advanced React App
        </h1>
        <p className="text-lg mb-6">
          Explore features like maps, dynamic routing, data filtering, and more!
        </p>
        <Link to="/form">
          <motion.button
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Exploring
          </motion.button>
        </Link>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800">App Features</h2>
        <div className="relative">
          {/* Image Carousel */}
          <motion.div
            className="overflow-hidden"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={images[currentSlide]}
              alt={`Feature ${currentSlide + 1}`}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100"
            >
              &gt;
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">What We Offer</h3>
        <ul className="list-disc list-inside text-left text-gray-600 space-y-2 flex flex-col items-center">
          <li>🌍 Interactive Maps</li>
          <li>📋 Dynamic Forms</li>
          <li>🔍 Data Filtering</li>
          <li>💡 Responsive Design</li>
          <li>🚀 Fast Performance</li>
        </ul>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-gray-100 py-16 px-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h4 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Ready to Start?
        </h4>
        <div className="flex justify-center space-x-6">
          <Link to="/form">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link to="/map">
            <motion.button
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Map
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Footer or Additional Info */}
      <motion.div
        className="text-sm text-center text-gray-500 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p>Made with ❤️ using React, Tailwind CSS, and Framer Motion</p>
      </motion.div>
    </div>
  );
}

export default Home;
