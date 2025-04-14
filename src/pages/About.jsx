import React, { useRef } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion, useInView } from "framer-motion";

// Animation variants for text
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Infinite floating image animation
const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const paragraphs = [
    `Once upon a screen, there was a curious kid who loved breaking things to understand how they worked. That kid was me — <span class="font-bold text-purple-500">Sahil</span>. Years later, I now build things instead of breaking them.`,
    `I’m a <span class="font-bold text-purple-500">developer</span> by choice, a <span class="font-bold text-purple-500">storyteller</span> by instinct. My journey began with curiosity — late nights exploring how the internet and apps came alive. I didn’t know the words for it back then, but I knew I wanted to create something meaningful.`,
    `Now, I craft <span class="font-bold text-purple-500">digital experiences</span> that are clean, intuitive, and designed for the person behind the screen. Every line of code I write carries a little bit of me — a <span class="font-bold text-purple-500">mix of logic</span>, a <span class="font-bold text-purple-500">bit of chaos</span>, and a <span class="font-bold text-purple-500">lot of care</span>. I also share thoughts and learnings through my <span class="font-bold text-purple-500">blogs</span>.`,
    `When I’m not coding, you’ll find me on the open road with a cup of tea, thinking about the next story to tell.`,
  ];

  return (
    <div className="relative min-h-screen w-full bg-neutral-900 text-white font-mono overflow-hidden">
      {/* Section label */}
      <div className="absolute top-6 left-6 text-xl">
        About <span className="text-purple-500">/&gt;</span>
      </div>

      {/* Main content */}
      <div className="p-6 md:p-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10 min-h-screen">
        {/* Text */}
        <div className="flex flex-col gap-6 md:w-7/12 z-10" ref={ref}>
          {paragraphs.map((text, index) => (
            <motion.div
              key={index}
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>

        {/* Animated floating image */}
        <motion.img
          src="/src/assets/developer_image.svg"
          alt="Developer Illustration"
          className="w-3/4 md:w-[350px] opacity-90 pointer-events-none"
          animate={{
            scale: [1, 1.015, 1],
            opacity: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default About;
