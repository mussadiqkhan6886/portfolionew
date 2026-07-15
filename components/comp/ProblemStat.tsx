'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface ProblemStatProps {
  problemStatement: string;
}

const ProblemStat = ({ problemStatement }: ProblemStatProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-border/20">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between border-b border-gray cursor-pointer py-4 text-left "
      >
        <h3 className="text-black uppercase text-xs sm:text-sm">
          Problem Statement
        </h3>

        <FiChevronDown
          className={`h-5 w-5 text-black transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pt-1 text-sm leading-6 text-text">
            {problemStatement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemStat;