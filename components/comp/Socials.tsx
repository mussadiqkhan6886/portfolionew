import { socials } from '@/constants'
import Link from 'next/link'
import React from 'react'
import MagnetText from '../ui/MagnetEffect'

const Socials = () => {
  return (
    <>
        <ul className="flex gap-4 sm:gap-5 flex-wrap justify-end">
            {socials.map((item) => (
            <li key={item.link}>
                <Link href={item.link} target="_blank">
                <MagnetText
                    pathname="/"
                    text={item.title}
                    dot="down"
                    strength={0.2}
                    className="text-xs md:text-sm"
                />
                </Link>
            </li>
            ))}
        </ul>
    </>
  )
}

export default Socials
