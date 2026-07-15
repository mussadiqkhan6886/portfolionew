'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface ProblemStatProps {
  problemStatement: string;
  mainObjective: string;
  techStack: string[];
  description: string
}

const ProblemStat = ({
  problemStatement,
  mainObjective,
  techStack,
  description
}: ProblemStatProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const sections = [
    {
      title: 'Description',
      content: (
        <p className="text-sm leading-6 text-text">{description}</p>
      ),
    },
    {
      title: 'Problem Statement',
      content: (
        <p className="text-sm leading-6 text-text">{problemStatement}</p>
      ),
    },
    {
      title: 'Main Objective',
      content: (
        <p className="text-sm leading-6 text-text">{mainObjective}</p>
      ),
    },
    {
      title: 'Tech Stack',
      content: (
        <div className="flex flex-wrap gap-2">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray px-3 py-1 text-xs text-text"
            >
              {item}
            </span>
          ))}
        </div>
      ),
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-border/20">
      {sections.map((section, index) => (
        <div className={`${section.title.toLowerCase() === "description" ? "block md:hidden" : ""}`} key={section.title}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full cursor-pointer items-center justify-between border-b border-gray py-4 text-left"
          >
            <h3 className="text-xs uppercase text-black sm:text-sm">
              {section.title}
            </h3>

            <FiChevronDown
              className={`h-5 w-5 text-black transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              openIndex === index
                ? 'grid-rows-[1fr]'
                : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="py-5">{section.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemStat;