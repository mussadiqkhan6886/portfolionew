"use client";

import { motion, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const EASE_CUSTOM = [0.85, 0, 0.15, 1];

export default function PageTransition() {
  const pathname = usePathname();
  const [displayTitle, setDisplayTitle] = useState("");
  const controls = useAnimationControls();

  const formatTitle = (path: string) => {
    if (path === "/") return "HOME";
    return path.replace("/", "").replaceAll("-", " ").toUpperCase();
  };

  useEffect(() => {
    setDisplayTitle(formatTitle(pathname));
    controls.start("exit");
  }, [pathname, controls]);

  useEffect(() => {
    const handleTransitionStart = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetPath: string }>;
      setDisplayTitle(formatTitle(customEvent.detail.targetPath));
      controls.set("initial");
      controls.start("enter");
    };

    window.addEventListener("page-transition-start", handleTransitionStart);
    return () => window.removeEventListener("page-transition-start", handleTransitionStart);
  }, [controls]);

  const panelVariants = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.04,
      },
    }),
    exit: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.6 + i * 0.04, // Keeps screen black while text drops out first
      },
    }),
  };

  // Title-level animation variants
  const titleVariants = {
    initial: { y: "105%", opacity: 0 },
    enter: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: EASE_CUSTOM,
        delay: 0.2, // Appears smoothly right after curtains meet
      },
    },
    exit: {
      y: "-105%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: EASE_CUSTOM,
        delay: 0.1, // Disappears smoothly up into the mask before curtain opens
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] w-screen h-screen grid grid-cols-4 overflow-hidden bg-transparent select-none pointer-events-none"
      initial="initial"
      animate={controls}
    >
      {/* Background Panels */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`panel-${i}`}
          custom={i}
          variants={panelVariants}
          className="w-full h-full bg-neutral-950 border-r border-neutral-900/10 last:border-none will-change-transform"
        />
      ))}

      {/* Title Mask Area */}
      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none">
        {/* The overflow-hidden wrapper is padded vertically so letters like T & C never catch on the edge */}
        <div className="overflow-hidden py-6 px-12 flex items-center justify-center">
          <motion.h1 
            variants={titleVariants}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-black tracking-wider leading-none will-change-transform"
          >
            {displayTitle}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}