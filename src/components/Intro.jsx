import React, { useEffect, useState } from "react";

const words = ["websites", "content", "experiences", "apps", "UI/UX"];
const typingSpeed = 50;
const deletingSpeed = 50;
const delayBetweenWords = 1200;

const Intro = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section>
      <div className=" flex flex-col justify-center items-center text-white text-center px-4">
        <p className="text-lg md:text-xl">Hi, my name is</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Sahil Tiwari</h1>
        <p className="text-lg md:text-2xl mt-4">
          I design and develop{" "}
          <span className="text-purple-500 font-mono">{displayedText}</span>
          <span className="blinking-cursor text-purple-500">|</span>
        </p>
        <p className="text-md md:text-lg mt-2 text-gray-400">
          Let me show You...
        </p>
      </div>
    </section>
  );
};

export default Intro;
