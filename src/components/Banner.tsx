import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.theleela.com/prod/content/assets/styles/aio_banner_image_webp/public/aio-banner/dekstop/Flavours-of-Kerala.jpg.webp?VersionId=DEjf3StdaKXOBody7I8RlD.7OJ.dNqHl&itok=_FerNWup",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://cdn.pixabay.com/photo/2020/01/16/04/52/munnar-4769654_1280.jpg",
  "https://pbs.twimg.com/media/DDj5XM4VYAIn0DH?format=jpg&name=large",
  "https://images.pexels.com/photos/3285746/pexels-photo-3285746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="relative w-full h-[500px] overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.6)] tracking-wide">
            Explore the Beauty of Kerala
          </h1>
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
