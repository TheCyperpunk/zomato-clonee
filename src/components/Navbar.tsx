import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          FoodHub
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#52A0FD] hover:to-[#00e2fa] hover:scale-105 hover:shadow-[0_0_15px_rgba(82,160,253,0.5)]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#52A0FD] hover:to-[#00e2fa] hover:scale-105 hover:shadow-[0_0_15px_rgba(82,160,253,0.5)]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#52A0FD] hover:to-[#00e2fa] hover:scale-105 hover:shadow-[0_0_15px_rgba(82,160,253,0.5)]"
          >
            Contact
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-1.5 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#52A0FD] hover:to-[#00e2fa] hover:scale-105 hover:shadow-[0_0_15px_rgba(82,160,253,0.5)]">
                <User className="w-6 h-6 text-white" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link to="/restaurant-settings" className="w-full">
                  Restaurant Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/orders" className="w-full">
                  Order History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="w-full text-left text-red-500">
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
