'use client';

import { menu } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MagnetText from '../ui/MagnetEffect'
import TextPressure from '../ui/HeaderLogo'
import Menu from './Menu';
import { FiMenu } from 'react-icons/fi';

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
    <header className="fixed top-0 w-full z-50 text-white flex justify-between items-center p-6 px-8">
        {hide ? <> <button className="absolute top-8 right-8" onClick={() => setIsOpen(true)}>
            <MagnetText mobile={false} dot={"no"} text={<FiMenu size={28} /> } strength={0.5} className=" w-18 h-18 rounded-full bg-text hover:bg-ctr-dark justify-center items-center text-gray" />
        </button>
        {isOpen && <Menu close={setIsOpen} />}
        </>
         : <> <Link href="/">
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
            minFontSize={24}
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
    </header>
  )
}

export default Header
