import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Spiced Pumpkin Waffles",
    description: "Crispy waffles with pumpkin spice, topped with maple syrup",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  },
  {
    id: "2",
    name: "Tender Pot Roast",
    description: "Slow-cooked beef with vegetables in rich gravy",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    id: "3",
    name: "Dutch Apple Pie",
    description: "Classic pie with streusel topping and vanilla ice cream",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
  {
    id: "4",
    name: "Grilled Salmon",
    description: "Fresh salmon with herbs and lemon butter sauce",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
  },
  ...Array.from({ length: 24 }, (_, i) => ({
    id: `${i + 5}`,
    name: [
      "Butter Chicken",
      "Beef Biryani",
      "Fish Curry",
      "Chicken Tikka",
      "Vegetable Korma",
      "Mushroom Masala",
      "Prawn Curry",
      "Mutton Rogan Josh",
    ][i % 8],
    description: "Traditional Kerala style preparation with authentic spices",
    image: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    ][i % 4],
  })),
];

const FoodList = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? foodItems : foodItems.slice(0, 4);

  return (
    <div className="w-full py-12 px-6 bg-[#f6f4f2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Dishes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-[24px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-[16px] bg-gradient-to-r from-[#52A0FD] to-[#00e2fa] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2 bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white hover:opacity-90 transition-all duration-300 rounded-[16px]"
          >
            {showAll ? "Show Less" : "See More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
