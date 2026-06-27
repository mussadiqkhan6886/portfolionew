"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExperienceItem {
  index: string;
  role: string[];        // split lines for line-break control
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    index: "01",
    role: ["Full-Stack Developer", "& Founder"],
    company: "Scrupulous",
    type: "Freelance Agency",
    period: "Aug 2025 — Present",
    location: "Islamabad, PK",
    bullets: [
      "Built and deployed 20+ production websites for clients across Pakistan, Saudi Arabia, and the UK — solo, end-to-end.",
      "Architected full-stack Next.js + TypeScript apps with MongoDB, NextAuth, Cloudinary, and REST API routes.",
      "Engineered admin dashboards with product CRUD, order fulfilment, coupon engines, and real-time analytics.",
      "Achieved 99+ Lighthouse SEO scores via JSON-LD, XML sitemaps, Open Graph, and GSC integration.",
    ],
    tags: ["Next.js 16", "TypeScript", "MongoDB", "Tailwind CSS", "Cloudinary", "JWT", "SEO"],
  },
  {
    index: "02",
    role: ["Front-End Developer", "Intern"],
    company: "Code Alpha",
    type: "Remote",
    period: "Feb 2024 — Mar 2024",
    location: "Remote",
    bullets: [
      "Shipped three interactive JS apps — Calculator, 3D CSS Gallery, Music Player — demonstrating DOM manipulation and event delegation.",
      "Resolved cross-browser CSS inconsistencies across mobile, tablet, and desktop viewports.",
      "Built responsive, animation-driven UIs in a production-speed remote environment.",
    ],
    tags: ["JavaScript", "CSS3", "DOM Manipulation", "Responsive Design", "CSS Animation"],
  },
];

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={onToggle}
      className="
        group relative grid grid-cols-2 gap-8
        border-b border-border
        py-8 cursor-pointer
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
          <span className="text-[12px] text-gray-500">
            {item.company}
            <span className="mx-1.5 text-gray">·</span>
            {item.type}
          </span>
          <span className="text-[12px] text-gray-500">
            {item.period} · {item.location}
          </span>
        </div>
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
                className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full border border-gray text-gray-500"
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
            w-7 h-7 rounded-full border border-gray flex-shrink-0
            flex items-center justify-center text-gray-400 text-base font-light
            group-hover:border-gray-400 group-hover:text-gray-700
            transition-colors duration mt-0.5
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