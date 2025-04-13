import React from "react";
import ScrollIndicator from "../components/ScrollIndicator";

const Work = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-950">
      <div className="absolute top-6 left-6 text-white text-2xl font-mono">
        Work <span className="text-purple-500">/&gt;</span>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Work;