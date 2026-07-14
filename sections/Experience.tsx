"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "motion/react";
import { experiences } from "@/constants";
import MagnetText from "@/components/ui/MagnetEffect";
import {gsap} from "gsap"

// ─── Stat counter ─────────────────────────────────────────────────────────────

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return;
      fired.current = true;
      const t0 = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Row ──────────────────────────────────────────────────────────────────────

function ExperienceRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {

  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
      if (!cursorRef.current) return;
      xTo.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.55,
        ease: "power3.out",
      });
      yTo.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.55,
        ease: "power3.out",
      });
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      xTo.current?.(x);
      yTo.current?.(y);
    };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={onToggle}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="
        group relative grid grid-cols-1 md:grid-cols-2 gap-8
        border-b border-border
        py-8 cursor-pointer hover:pl-3 duration-300 transition-all
      "
    >
      {/* Hover underline sweep */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gray-900 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />

      {/* ── Left ── */}
      <div className="flex flex-col justify-between gap-4">

        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22px] md:text-[28px] font-light tracking-[-0.025em] text-gray-900 leading-[1.1]"
          >
            {item.role[0]}
            <br />
            {item.role[1]}
          </motion.h3>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] text-black font-medium">
            {item.company}
            <span className="mx-1.5 text-gray">·</span>
            {item.type}
          </span>
          <span className="text-[12px] text-gray-500">
            {item.period} · {item.location}
          </span>
        </div>
      </div>

      {/* cursor following button */}
      <div
          ref={cursorRef}
          className="hidden md:block pointer-events-none absolute -left-6 -top-6 z-50"
        >
          <AnimatePresence>
            {isHovering && (
              <motion.div
                key="thumb"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.35, ease: easeInOut }}
                style={{
                  width: 130,
                  height: 130,
                  transform: "translate(-50%, -50%)",
                }}
                className="relative overflow-hidden "
              >
  
                <button
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <MagnetText text={isOpen ? "Close" : "View"} className="pointer-events-auto rounded-full bg-ctr w-18 h-18 p-2 text-sm font-medium text-white text-center items-center justify-center transition-transform duration-300" strength={7} dot={"no"} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
      </div>


      {/* ── Right ── */}
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          {/* Bullets (expand/collapse) */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden space-y-2 mb-4"
              >
                {item.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex gap-2.5 text-[13px] text-black leading-relaxed"
                  >
                    <span className="text-gray text-[10px] mt-[3px] flex-shrink-0">→</span>
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Tags always visible */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 border rounded-full border-gray text-white bg-black"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Toggle button */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-7 h-7 rounded-full bg-ctr-dark text-white flex-shrink-0
            flex items-center justify-center  text-base 
             mt-0.5 absolute top-8 lg:-top-4  right-0  
          "
          style={{ lineHeight: 1 }}
        >
          +
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-0">
          <h3 className="text-gray uppercase text-sm border-b border-border pb-8">
            Experience
          </h3>
         

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-border origin-left"
        />

        {/* ── Rows ── */}
        <div>
          {experiences.map((item, i) => (
            <ExperienceRow
              key={item.index}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div
        className="max-w-5xl mx-auto px-6 py-3 md:px-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center ">
          {[
            { target: 20, suffix: "+", label: "Sites shipped" },
            { target: 3,  suffix: "",  label: "Countries" },
            { target: 100, suffix: "", label: "Lighthouse" },
            { target: 1, suffix: "+", label: "Years exp." },
          ].map((s) => (
            <div key={s.label} className="py-8 px-4 flex flex-col items-center first:pl-0">
              <p className="text-[36px] font-extralight tracking-[-0.04em] text-black leading-none mb-1.5">
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-xs uppercase text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}