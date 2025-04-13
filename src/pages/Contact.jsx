import React from "react";
import ScrollIndicator from "../components/ScrollIndicator";

const Contact = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-800">
      <div className="absolute top-6 left-6 text-white text-2xl font-mono">
        Contact <span className="text-purple-500">/&gt;</span>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Contact;