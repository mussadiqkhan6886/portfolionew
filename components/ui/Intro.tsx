"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import WritingEffect from "./TypingEffect";

export default function IntroLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;
  timeout = setTimeout(() => {
    setShowLoader(false);
  }, 1500);

  return () => {
    clearTimeout(timeout);
  };
}, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ y: 0, borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%", }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            transition: {
              duration: 0.8,
              ease: [0.60, 0, 0.15, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-text"
        >
          <WritingEffect className="text-3xl tracking-wide text-white md:text-6xl" text="Open to work" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}