import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center select-none backdrop-opacity-0 bg-transparent transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-white font-mono tracking-widest">
        &lt;Sahil <span className="text-purple-500">/&gt;</span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-white font-mono text-sm md:text-base">
        {["Start", "Work", "About", "Contact"].map((item, idx) => (
          <li
            key={idx}
            className="hover:text-purple-400 transition duration-300 cursor-pointer select-none"
          >
            {item} <span className="text-purple-500">/&gt;</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
