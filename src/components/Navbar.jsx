import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full px-4 sm:px-8 py-4 z-50 flex flex-col items-end select-none bg-transparent">
      {/* Responsive full-width scroll progress bar on mobile */}
      <div className="relative w-full sm:w-44 h-2 bg-gray-700 rounded-full overflow-hidden shadow-md">
        <div
          className="h-full bg-purple-500 rounded-full transition-all duration-[600ms] ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
