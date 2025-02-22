import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface RestaurantCardProps {
  name?: string;
  image?: string;
  rating?: number;
  cuisine?: string;
  priceRange?: string;
  deliveryTime?: string;
  distance?: string;
}

const RestaurantCard = ({
  name = "Tasty Bites Restaurant",
  image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
  rating = 4.5,
  cuisine = "Indian",
  priceRange = "₹₹",
  deliveryTime = "30-40 min",
  distance = "1.5 km",
}: RestaurantCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white"
    >
      <Card className="overflow-hidden backdrop-blur-md bg-white/30 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge
              className="bg-white/90 text-black backdrop-blur-sm"
              variant="secondary"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-1 inline" />
              {rating}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className="bg-orange-50">
              {cuisine}
            </Badge>
            <Badge variant="outline" className="bg-orange-50">
              {priceRange}
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-0 flex justify-between text-sm text-gray-600">
          <span>{deliveryTime}</span>
          <span>{distance}</span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RestaurantCard;
