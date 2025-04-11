import React from "react";
import Intro from "../components/Intro";

const Start = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 h-full flex justify-center items-center">
        <Intro />
      </div>
    </div>
  );
};

export default Start;
