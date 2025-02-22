import React, { useState } from "react";
import SearchSection from "./SearchSection";
import ServiceGrid from "./RestaurantGrid";
import RestaurantList from "./RestaurantList";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Banner from "./Banner";
import FoodList from "./FoodList";
import Footer from "./Footer";

interface HomeProps {
  initialSearchTerm?: string;
  initialLocation?: string;
}

const Home = ({ initialSearchTerm = "", initialLocation = "" }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [location, setLocation] = useState(initialLocation);

  const handleSearch = (newSearchTerm: string, newLocation: string) => {
    setSearchTerm(newSearchTerm);
    setLocation(newLocation);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-[#f6f4f2]"
    >
      <Navbar />
      <SearchSection
        onSearch={handleSearch}
        initialSearchTerm={searchTerm}
        initialLocation={location}
      />
      <ServiceGrid />
      <RestaurantList />
      <Banner />
      <FoodList />
      <Footer />
    </motion.div>
  );
};

export default Home;
