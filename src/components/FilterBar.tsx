import React from "react";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { motion } from "framer-motion";

interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

interface FilterBarProps {
  cuisineFilters?: FilterOption[];
  priceFilters?: FilterOption[];
  ratingFilters?: FilterOption[];
  onFilterChange?: (filterId: string, filterType: string) => void;
}

const FilterBar = ({
  cuisineFilters = [
    { id: "indian", label: "Indian", active: true },
    { id: "chinese", label: "Chinese" },
    { id: "italian", label: "Italian" },
    { id: "mexican", label: "Mexican" },
    { id: "japanese", label: "Japanese" },
  ],
  priceFilters = [
    { id: "low", label: "₹" },
    { id: "medium", label: "₹₹" },
    { id: "high", label: "₹₹₹" },
  ],
  ratingFilters = [
    { id: "4plus", label: "4.0+" },
    { id: "4.5plus", label: "4.5+" },
  ],
  onFilterChange = () => {},
}: FilterBarProps) => {
  return (
    <div className="w-full bg-white py-4 sticky top-0 z-10 shadow-xl">
      <ScrollArea className="w-full">
        <div className="flex gap-6 px-6">
          <div className="flex gap-2">
            {cuisineFilters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter.active ? "default" : "outline"}
                  className={`rounded-full ${filter.active ? "bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white" : "hover:bg-orange-50"}`}
                  onClick={() => onFilterChange(filter.id, "cuisine")}
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200" />

          <div className="flex gap-2">
            {priceFilters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter.active ? "default" : "outline"}
                  className={`rounded-full ${filter.active ? "bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white" : "hover:bg-orange-50"}`}
                  onClick={() => onFilterChange(filter.id, "price")}
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200" />

          <div className="flex gap-2">
            {ratingFilters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter.active ? "default" : "outline"}
                  className={`rounded-full ${filter.active ? "bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white" : "hover:bg-orange-50"}`}
                  onClick={() => onFilterChange(filter.id, "rating")}
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FilterBar;
