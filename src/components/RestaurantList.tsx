import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  location: string;
  deliveryTime: string;
  offer?: string;
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Salkara Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.4,
    cuisine: "Kerala • Arabian • Chinese",
    location: "Malappuram",
    deliveryTime: "35-40 mins",
    offer: "FREE STARTER",
  },
  ...Array.from({ length: 59 }, (_, i) => ({
    id: `${i + 2}`,
    name:
      [
        "Paragon",
        "Rahmath",
        "Zain's",
        "Calicut Paragon",
        "Beach Way",
        "Topform",
        "Bombay Hotel",
        "Sagar",
        "Hotel Saravana",
        "Thali",
        "Spice Village",
        "Kerala Kitchen",
        "Malabar Palace",
        "Arabian Knights",
        "Tasty Bites",
      ][i % 15] + ` ${Math.floor(i / 15) + 1}`,
    image: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      "https://images.unsplash.com/photo-1544025162-d76694265947",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    ][i % 5],
    rating: Number((4 + Math.random()).toFixed(1)),
    cuisine: [
      "Kerala • Traditional",
      "Malabar • Seafood",
      "Arabian • BBQ",
      "Chinese • Thai",
      "North Indian • Mughlai",
      "South Indian • Kerala",
    ][i % 6],
    location: [
      "Kozhikode",
      "Malappuram",
      "Wayanad",
      "Kannur",
      "Thalassery",
      "Palakkad",
    ][i % 6],
    deliveryTime: `${25 + (i % 20)}-${35 + (i % 20)} mins`,
    offer:
      i % 3 === 0
        ? "FREE STARTER"
        : i % 3 === 1
          ? "₹75 OFF ABOVE ₹299"
          : undefined,
  })),
];

const RestaurantList: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const cardsPerRow = 5;
  const totalPages = Math.ceil(restaurants.length / (cardsPerRow * 2));

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentRestaurants = {
    top: restaurants.slice(
      (currentPage * cardsPerRow) % restaurants.length,
      (currentPage * cardsPerRow + cardsPerRow) % restaurants.length,
    ),
    bottom: restaurants.slice(
      (currentPage * cardsPerRow + cardsPerRow) % restaurants.length,
      (currentPage * cardsPerRow + cardsPerRow * 2) % restaurants.length,
    ),
  };

  return (
    <div className="w-full py-8 px-6 bg-[#f6f4f2]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Top Restaurants in Kerala</h2>
            <span className="text-gray-500 text-sm">
              {currentPage * (cardsPerRow * 2) + 1} -{" "}
              {Math.min(
                (currentPage + 1) * (cardsPerRow * 2),
                restaurants.length,
              )}{" "}
              of {restaurants.length}
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <div className="relative space-y-6">
            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10 pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full hover:bg-orange-50 bg-white pointer-events-auto"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full hover:bg-orange-50 bg-white pointer-events-auto"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Top row */}
            <motion.div
              key={`top-${currentPage}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-5 gap-6"
            >
              {currentRestaurants.top.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  className="group bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {restaurant.offer && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {restaurant.offer}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        className="text-white gap-2 hover:bg-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 truncate">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="bg-gradient-to-r from-[#52A0FD] to-[#00e2fa] text-white px-2 py-0.5 rounded-full text-sm font-medium inline-flex items-center gap-1">
                        <Star className="w-4 h-4" fill="currentColor" />
                        {restaurant.rating}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 truncate">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="truncate">{restaurant.location}</span>
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom row */}
            <motion.div
              key={`bottom-${currentPage}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-5 gap-6"
            >
              {currentRestaurants.bottom.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  className="group bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {restaurant.offer && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {restaurant.offer}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        className="text-white gap-2 hover:bg-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 truncate">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="bg-gradient-to-r from-[#52A0FD] to-[#00e2fa] text-white px-2 py-0.5 rounded-full text-sm font-medium inline-flex items-center gap-1">
                        <Star className="w-4 h-4" fill="currentColor" />
                        {restaurant.rating}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 truncate">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="truncate">{restaurant.location}</span>
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RestaurantList;
