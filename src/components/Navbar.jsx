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
    <nav className="fixed top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center select-none bg-transparent">
      <div className="text-2xl font-bold text-white font-mono tracking-widest">
        &lt;SAHIL <span className="text-purple-500">/&gt;</span>
      </div>
      <div className="relative w-32 h-1 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};
export default Navbar;