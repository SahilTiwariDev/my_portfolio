import React from "react";
import Intro from "../components/Intro";

const Start = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

      <div className="relative z-10 flex items-center justify-start h-full">
        <Intro />
      </div>
    </div>
  );
};

export default Start;
