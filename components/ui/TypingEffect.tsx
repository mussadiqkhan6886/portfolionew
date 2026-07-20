"use client";

import { special } from "@/constants/font";
import { memo, useEffect, useState } from "react";

interface TypingEffectProps {
  text?: string;
  typingSpeed?: number; // ms per character while typing
  className?: string;
  cursorClassName?: string;
}

function TypingEffect({
  text = "I love to code",
  typingSpeed = 75,
  className = "",
  cursorClassName = "",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    index++;

    setDisplayedText(text.slice(0, index));

    if (index === text.length) clearInterval(interval);
  }, typingSpeed);

  return () => clearInterval(interval);
}, [text, typingSpeed]);

  return (
    <span className={`inline-flex items-end ${special.className} ${className}`}>
      {displayedText}
      <span
        className={`ml-1 inline-block w-[18px] sm:w-[30px] h-[2px] sm:h-[3px] bg-current animate-pulse ${cursorClassName}`}
      />
    </span>
  );
}

export default memo(TypingEffect);