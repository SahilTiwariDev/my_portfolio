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
    `I’m <span class="font-bold text-purple-500">Sahil</span> — a curious soul who once loved breaking things just to see how they worked. Now, I build them instead.`,
    `A <span class="font-bold text-purple-500">developer</span> by passion, a <span class="font-bold text-purple-500">storyteller</span> at heart, and a <span class="font-bold text-purple-500">content creator</span> by choice, I craft digital experiences that blend <span class="font-bold text-purple-500">logic</span>, <span class="font-bold text-purple-500">care</span>, and a hint of <span class="font-bold text-purple-500">chaos</span>. When I’m not coding, I’m chasing stories on the road with a cup of tea in hand — always learning, always sharing.`,
  ];

  return (
    <div className="relative min-h-screen max-h-full w-full bg-neutral-900 text-white font-mono overflow-hidden">
      {/* Section label */}
      <div className="absolute top-6 left-6 text-xl">
        About <span className="text-purple-500">/&gt;</span>
      </div>

      {/* Main content */}
      <div className="p-6 md:p-20 flex flex-col-reverse md:flex-row items-center justify-center gap-24 min-h-screen">
        {/* Text */}
        <div className="flex flex-col gap-6 md:w-7/12 lg:w-5/12 z-10" ref={ref}>
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
          src="/assets/developer_image.svg"
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
