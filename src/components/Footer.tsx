import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f4f2] text-gray-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] bg-clip-text text-transparent">
              FoodHub
            </h2>
            <p className="text-gray-600">
              Discover the best food & drinks in Kozhikode
            </p>
            <div className="flex space-x-4">
              {["10,000+", "2,000+", "150+"].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-[#52A0FD] to-[#00e2fa] bg-clip-text text-transparent">
                    {stat}
                  </div>
                  <div className="text-sm text-gray-500">
                    {index === 0
                      ? "Users"
                      : index === 1
                        ? "Restaurants"
                        : "Cities"}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Youtube, link: "#" },
                { icon: Linkedin, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-[#ff4e00] hover:to-[#ec9f05] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact Us",
                "Terms & Conditions",
                "Privacy Policy",
                "Refund Policy",
                "Cookie Policy",
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "support@foodhub.com" },
                { icon: Phone, text: "+91 123 456 7890" },
                { icon: MapPin, text: "Kozhikode, Kerala, India" },
              ].map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 flex items-center gap-3 group hover:text-gray-900"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#ff4e00] group-hover:to-[#ec9f05] transition-all duration-300 shadow-sm">
                    <info.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                  {info.text}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">Subscribe for latest updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white rounded-full px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#ff4e00] border border-gray-200 shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ff4e00] to-[#ec9f05] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                Subscribe
              </motion.button>
            </div>
            {/* App Store Badges */}
            <div className="flex gap-4 pt-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2024 FoodHub. All rights reserved.</p>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4e00] to-[#ec9f05]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
