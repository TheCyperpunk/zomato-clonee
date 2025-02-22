import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface SearchSectionProps {
  onSearch?: (searchTerm: string, location: string) => void;
  initialSearchTerm?: string;
  initialLocation?: string;
}

const SearchSection = ({
  onSearch = () => {},
  initialSearchTerm = "",
  initialLocation = "",
}: SearchSectionProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [location, setLocation] = useState(initialLocation);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full min-h-[280px] bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Find Your Favorite Food in Kozhikode
          </h1>
          <p className="text-white/90 text-lg">
            Discover the best restaurants, cafes, and street food
          </p>
        </div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for restaurants or dishes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-transparent focus:border-orange-500 transition-all"
              />
            </div>

            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-transparent focus:border-orange-500 transition-all"
              />
            </div>

            <Button
              onClick={() => onSearch(searchTerm, location)}
              className="h-12 px-8 bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] hover:opacity-90 transition-opacity"
            >
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchSection;
