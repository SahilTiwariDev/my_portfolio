import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-6 right-6 z-20">
      <div className="w-4 h-8 border-2 border-purple-500 rounded-full relative animate-bounce">
        <div className="w-1 h-1 bg-purple-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2" />
      </div>
    </div>
  );
};

export default ScrollIndicator;