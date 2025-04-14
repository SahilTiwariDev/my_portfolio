import React from "react";
import Intro from "../components/Intro";
import ScrollIndicator from "../components/ScrollIndicator";

const Start = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-16 lg:pl-60 lg:pr-8">
        <Intro />
      </div>

      {/* Scroll indicator */}
      <div>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Start;
