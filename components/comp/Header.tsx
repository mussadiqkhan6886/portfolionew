'use client';

import { menu } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MagnetText from '../ui/MagnetEffect'
import TextPressure from '../ui/HeaderLogo'
import Menu from './Menu';
import { FiMenu, FiX } from 'react-icons/fi';
import {AnimatePresence, motion} from "framer-motion"
import { usePathname } from 'next/navigation';

const Header = () => {
  const [hide, setHide] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    const checkScroll = () => {
      setHide(window.scrollY > 100);
    };

    checkScroll(); 
    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  
  return (
    <header
    className={`${
      hide ? "fixed" : "absolute"
    } top-0 z-50 flex w-full items-center justify-between px-6 py-6 sm:px-8`}
  >
  <AnimatePresence mode="wait">
    {hide || isOpen ? (
      <motion.div
        key="floating-menu"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 18,
          mass: 0.7,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-6 top-6 z-50 sm:right-8 sm:top-8"
      >
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <MagnetText
            
            dot="no"
            text={isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            strength={0.5}
            className={`flex h-15 w-15 items-center justify-center rounded-full text-white sm:h-18 sm:w-18 ${
              isOpen ? "bg-ctr-dark" : "bg-text"
            } hover:bg-ctr-dark`}
          />
        </button>
      </motion.div>
    ) : (
      <div  
        className="flex w-full items-center justify-between"
      >
        <Link href="/">
          <TextPressure
            text="Code By Mussadiq!"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor={pathName === "/" ? "#fff" : "#000"}
            strokeColor="#5227FF"
            minFontSize={20}
          />
        </Link>

        <div className="block sm:hidden">
          <button className={`${pathName !== "/" ? "text-black" : "text-white"}`} onClick={() => setIsOpen(true)}>
            <MagnetText active={true} pathname={pathName}  dot="left" text="Menu" strength={0.5} />
          </button>
        </div>

        <nav className={`hidden sm:flex ${pathName !== "/" ? "text-black" : "text-white"}`}>
          <ul className="flex gap-9">
            {menu.map((item) => (
              <li className="relative font-medium" key={item.link}>
                <Link href={item.link}>
                  <MagnetText active={pathName === item.link} pathname={pathName}
                    text={item.title}
                    strength={0.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )}
  </AnimatePresence>

  <AnimatePresence>
    {isOpen && (
      <Menu pathname={pathName} close={() => setIsOpen(false)} />
    )}
  </AnimatePresence>
    </header>
  )
}

export default Header
