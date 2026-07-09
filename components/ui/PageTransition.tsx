"use client";

import { motion, useAnimationControls, Variant, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const EASE_CUSTOM = [0.85, 0, 0.15, 1];

export default function PageTransition() {
  const pathname = usePathname();
  const [displayTitle, setDisplayTitle] = useState("");
  const controls = useAnimationControls();

  const formatTitle = (path: string) => {
    if (path === "/") return "Home";
    if(path.includes("/work/")) return path.split("/work/")[1]
    return path.replace("/", "").replaceAll("-", " ")
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
  } as Variants

  const titleVariants : unknown = {
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
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] w-screen h-screen grid grid-cols-2 overflow-hidden bg-transparent select-none pointer-events-none"
      initial="initial"
      animate={controls}
    >
      {/* Background Panels */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`panel-${i}`}
          custom={i}
          variants={panelVariants}
          className="w-full h-full bg-black will-change-transform"
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none">
        <div className="overflow-hidden py-6 px-12 flex items-center justify-center">
          <motion.h1 
            variants={titleVariants as Variants | undefined}
            className="text-white text-4xl flex items-center justify-center gap-5 sm:text-5xl md:text-6xl tracking-tight leading-none will-change-transform capitalize"
          >
           <span className="bg-white rounded-full h-2 w-2 inline-block" /> {displayTitle}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}