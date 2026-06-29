"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

interface ResponsiveSplitTextProps {
  text: string;
  className?: string;
}

export default function ResponsiveSplitText({ text, className }: ResponsiveSplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth Awwwards fluid curve
  const CUBIC_EASE : [number, number, number, number] = [0.215, 0.61, 0.355, 1];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.020,
        delayChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    initial: {
      y: "120%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 0.55,
        ease: CUBIC_EASE,
      },
    },
  } as Variants

  // Split string cleanly into individual words by spaces
  const words = text.split(" ");

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ margin: "-12%" }}
      className={`${className} flex flex-wrap`} // flex-wrap lets words flow perfectly onto new lines
    >
      {words.map((word, index) => (
        <p
          key={index}
          className="relative inline-block overflow-hidden mr-[0.25em] py-[0.1em]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <motion.span
            variants={wordVariants}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </p>
      ))}
    </motion.div>
  );
}