import React, { useEffect, useState } from "react";

const texts = ["websites", "content", "experiences"];

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText("");
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(texts[index].slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === texts[index].length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <section className="text-white px-8 max-w-2xl">
      <p className="text-xl font-mono">
        Start <span className="text-purple-500">/&gt;</span>
      </p>
      <p className="text-lg mt-4">Hi, my name is</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-2">Sahil Tiwari</h1>
      <p className="text-xl mt-4 flex items-center">
        I design and develop
        <span className="text-purple-500 font-mono min-w-[140px] inline-block ml-2">
          {displayedText}
          <span className="inline-block w-[3px] h-6 bg-purple-500 animate-pulse ml-1 align-middle" />
        </span>
      </p>
      <p className="text-md mt-2 text-gray-400">Let me show You...</p>
    </section>
  );
};

export default Intro;
