import { menu } from '@/constants'
import Link from 'next/link'
import React from 'react'
import MagnetText from '../ui/MagnetEffect'

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 text-white flex justify-between items-center p-6 px-8">
      <div>
        <h1>Code by Mussadiq</h1>
      </div>
      {/* menu mobile */}
      <div className="block sm:hidden"></div>
      {/* menu larger screen */}
      <nav className="hidden md:flex">
        <ul className="flex gap-9">
        {menu.map((item, i) =>(
          <li className="relative" key={i}><Link href={item.link}><MagnetText text={item.title} strength={0.5} /> </Link></li>
        ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
