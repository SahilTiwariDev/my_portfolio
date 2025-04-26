import React from "react";
import Intro from "../components/Intro";
import ScrollIndicator from "../components/ScrollIndicator";
import MyImage from "../components/MyImage";

const Start = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col sm:flex-row items-center justify-evenly px-8 sm:px-10 md:px-16 lg:px-24 gap-5"> {/* Added gap for mobile */}
        {/* Flex container to hold both text and image */}
        <div className="w-full max-w-xl">
          <Intro />
        </div>
        
        <div className="hidden sm:block"> {/* Hide image on small screens */}
          <MyImage />
        </div>

        {/* For small screens: Show image below text */}
        <div className="sm:hidden">
          <MyImage />
        </div>
      </div>

      {/* Scroll indicator */}
      <div>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Start;
