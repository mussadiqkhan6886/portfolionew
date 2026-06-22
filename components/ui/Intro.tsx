"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",          // English
  "Hola",           // Spanish
  "Bonjour",        // French
  "Ciao",           // Italian
  "Hallo",          // German
  "Olá",            // Portuguese
  "Hej",            // Swedish / Danish
  "Hallo",          // Dutch
  "Merhaba",        // Turkish
  "नमस्ते",          // Hindi
  "こんにちは",       // Japanese
  "안녕하세요",       // Korean
  "السلام علیکم",    // Urdu / Arabic
];

export default function IntroLoader() {
  const [index, setIndex] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setIndex((current) => {
        if (current === greetings.length - 1) {
          clearInterval(greetingInterval);

          setTimeout(() => {
            setShowLoader(false);
          }, 500);

          return current;
        }

        return current + 1;
      });
    }, 180);

    return () => clearInterval(greetingInterval);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ y: 0, borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%", }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "60%",
            borderBottomRightRadius: "60%",
            transition: {
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-text"
        >
          <p
            className="text-3xl flex gap-4 items-center font-medium tracking-tight text-white md:text-6xl"
          >
           <span className="w-2 h-2 block bg-white rounded-full" /> {greetings[index]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}