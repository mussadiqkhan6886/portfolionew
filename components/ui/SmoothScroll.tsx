"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // higher = smoother/slower scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger in sync with Lenis's scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's own ticker (instead of a separate rAF loop).
    // Store the callback in a variable so add/remove reference the SAME
    // function — passing a fresh arrow function to `remove` silently fails
    // to unsubscribe, leaving zombie ticker callbacks running against a
    // destroyed Lenis instance. That's what caused the intermittent
    // "stuck near the bottom" scroll bug.
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Recalculate scroll bounds once everything (fonts, images, layout
    // shifts) has settled, so Lenis's virtual scroll limit matches the
    // real document height instead of whatever it measured on first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return <>{children}</>;
}