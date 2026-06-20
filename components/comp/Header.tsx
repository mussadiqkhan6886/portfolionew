import { menu } from '@/constants'
import Link from 'next/link'
import React from 'react'
import MagnetText from '../ui/MagnetEffect'
import TextPressure from '../ui/HeaderLogo'
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 text-white flex justify-between items-center p-6 px-8">
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
            minFontSize={24}
          />
        </Link>
      {/* menu mobile */}
      <div className="block sm:hidden">
        <MenuButton />
      </div>
      {/* menu larger screen */}
      <nav className="hidden sm:flex">
        <ul className="flex gap-9">
        {menu.map((item, i) =>(
          <li className="relative" key={i}><Link href={item.link}><MagnetText mobile={false} text={item.title} strength={0.5} /> </Link></li>
        ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
