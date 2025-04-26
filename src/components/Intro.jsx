import React, { useEffect, useState } from "react";

const texts = ["websites", "content", "experiences"];

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <section className="text-white px-4 sm:px-6 md:px-8 lg:px-10 max-w-full sm:max-w-xl md:max-w-2xl">
      <p className="text-lg sm:text-xl font-mono text-gray-300">
        Start <span className="text-purple-500">/&gt;</span>
      </p>
      <p className="text-2xl sm:text-3xl mt-4">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">Sahil Tiwari</h1>
      <p className="text-2xl sm:text-3xl mt-4 flex flex-wrap items-center">
        I design and develop
        <span className="text-purple-500 font-mono min-w-[120px] sm:min-w-[140px] inline-block sm:ml-2">
          {displayedText}
          <span className="inline-block w-[5px] h-6 sm:h-8 bg-purple-500 animate-pulse ml-1 align-middle" />
        </span>
      </p>
      <p className="text-lg sm:text-xl mt-2 text-gray-400">Let me show You...</p>
    </section>
  );
};

export default Intro;
