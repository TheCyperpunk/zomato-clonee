import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  link: string;
}

const ServiceCard = ({
  title,
  subtitle,
  discount,
  image,
  link,
}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
      onClick={() => navigate(link)}
    >
      <Card className="relative overflow-hidden aspect-[9/16] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Content overlay */}
        <div className="absolute inset-0 z-20 p-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-gray-200">{subtitle}</p>
            <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {discount}
            </div>
          </div>

          <motion.div
            className="absolute right-6 top-6 bg-blue-500 rounded-full p-2"
            whileHover={{ x: 5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black/30" />

        {/* Background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            aspectRatio: "5824/3264",
            objectPosition: "center",
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
