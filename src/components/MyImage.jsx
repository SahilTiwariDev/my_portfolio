import React from "react";

const MyImage = () => {
  return (
    <div className="w-[200px] sm:w-[250px] md:w-[300px] h-auto">
      <img
        src="/assets/My_Image.png" // Correct path to your image
        alt="Intro Image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default MyImage;
