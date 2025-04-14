import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white text-xl rounded-full shadow-md hover:bg-purple-700 transition z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
