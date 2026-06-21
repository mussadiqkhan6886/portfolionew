'use client';

import { menu } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MagnetText from '../ui/MagnetEffect'
import TextPressure from '../ui/HeaderLogo'
import Menu from './Menu';
import { FiMenu, FiX } from 'react-icons/fi';
import {AnimatePresence, motion} from "framer-motion"

const Header = () => {
  const [hide, setHide] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setHide(window.scrollY > 100);
    };

    checkScroll(); 
    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  
  return (
    <header className={`${hide ? "fixed" : "absolute"} top-0 w-full z-50 text-white flex justify-between items-center p-6 px-6 sm:px-8`}>
        <AnimatePresence>
        {hide || isOpen ? 
        <> 
        <motion.button initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 350,
              damping: 18,
              mass: 0.7,
            }}
            className="absolute top-6 z-50 sm:top-8 right-6 sm:right-8" onClick={() => setIsOpen(prev => !prev)}>

            <MagnetText mobile={false} dot={"no"} text={isOpen ? <FiX size={26} /> : <FiMenu size={26} />} strength={0.5} className={` w-15 sm:w-18 h-15 sm:h-18 rounded-full ${isOpen ? "bg-ctr-dark" : "bg-text"} hover:bg-ctr-dark justify-center items-center text-white`} />
        </motion.button>
        {isOpen && <Menu close={() => setIsOpen(false)} />}
        </>
         : 
         <> 
         <Link href="/">
          <TextPressure
            text="Code By Mussadiq!"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={20}
          />
        </Link>

      <div className="block sm:hidden">
        <button onClick={() => setIsOpen(true)}>
            <MagnetText mobile={true} dot={"left"} text="Menu" strength={0.5} />
        </button>
        {isOpen && <Menu close={setIsOpen} />}
      </div>
      {/* menu larger screen */}
      <nav className="hidden sm:flex">
        <ul className="flex gap-9">
        {menu.map((item, i) =>(
          <li className="relative" key={i}><Link href={item.link}><MagnetText mobile={false} text={item.title} strength={0.5} /> </Link></li>
        ))}
        </ul>
      </nav>
      </>}
      </AnimatePresence>
    </header>
  )
}

export default Header
