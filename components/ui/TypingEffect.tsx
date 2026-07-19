"use client";

import { special } from "@/constants/font";
import { useEffect, useState } from "react";

interface TypingEffectProps {
  text?: string;
  typingSpeed?: number; // ms per character while typing
  className?: string;
  cursorClassName?: string;
}

export default function TypingEffect({
  text = "I love to code",
  typingSpeed = 80,
  className = "",
  cursorClassName = "",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (displayedText.length < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);

  }, [displayedText, text, typingSpeed]);

  return (
    <span className={`inline-flex items-end ${special.className} ${className}`}>
      {displayedText}
      <span
        className={`ml-1 inline-block w-[18px] sm:w-[30px] h-[2px] sm:h-[3px] bg-current animate-pulse ${cursorClassName}`}
      />
    </span>
  );
}