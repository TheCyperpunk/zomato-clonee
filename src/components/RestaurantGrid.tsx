import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface ServiceGridProps {
  isLoading?: boolean;
}

const services = [
  {
    id: "1",
    title: "FOOD DELIVERY",
    subtitle: "FROM RESTAURANTS",
    discount: "UPTO 60% OFF",
    image:
      "https://preview.redd.it/anime-food-v0-l87v85indrzc1.jpg?width=1080&crop=smart&auto=webp&s=d85303c9d58783c3f19312054deec0dad874bcef",
    link: "/food-delivery",
  },
  {
    id: "2",
    title: "PREBOOKING",
    subtitle: "INSTANT GROCERY",
    discount: "UPTO 60% OFF",
    image:
      "https://preview.redd.it/anime-food-v0-fnu6cyhndrzc1.jpg?width=3264&format=pjpg&auto=webp&s=748d811f0d111301ef606e2e1ded3d93c71b6042",
    link: "/prebooking",
  },
  {
    id: "3",
    title: "DINEOUT",
    subtitle: "EAT OUT & SAVE MORE",
    discount: "UPTO 50% OFF",
    image:
      "https://preview.redd.it/anime-food-v0-x4rqc2indrzc1.jpg?width=3264&format=pjpg&auto=webp&s=310ca6f745a8356c9f92c7f4e0936234d153756d",
    link: "/dineout",
  },
  {
    id: "4",
    title: "GENIE",
    subtitle: "PICK-UP & DROP",
    discount: "INSTANT DELIVERY",
    image:
      "https://preview.redd.it/anime-food-v0-a25agmindrzc1.jpg?width=3264&format=pjpg&auto=webp&s=6cecdd7f874eea747083a584a7dc2a90ac18cb5f",
    link: "/genie",
  },
];

const ServiceGrid = ({ isLoading = false }: ServiceGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-[638px] bg-orange-50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-full h-[200px] bg-white/50 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[638px] p-6 bg-[#f6f4f2]">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard
              title={service.title}
              subtitle={service.subtitle}
              discount={service.discount}
              image={service.image}
              link={service.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceGrid;
