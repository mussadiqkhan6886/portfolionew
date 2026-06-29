import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TransitionLink from './TransitionLink'

const ProjectShowCaseMobile = () => {
  return (
    <section className="px-5 flex flex-col gap-17 items-center justify-center">
      {projects.slice(0,3).map((item, i) => (
        <TransitionLink href={item.link} key={i} className="h-[80vh] w-full block">
            <div className="relative w-full h-[78%]">
                <Image src={item.thumbnail} alt={item.title} fill className="object-center object-cover" />
            </div>
            <div>
                <h3 className="border-b border-gray text-4xl py-5">{item.title}</h3>
                <div className="py-3 flex justify-between items-center">
                    <p className="capitalize">{item.role}</p>
                    <p className="capitalize">{item.location}</p>
                </div>
            </div>
        </TransitionLink>
      ))}
      <TransitionLink href={"/work"} className="py-4 mt-2 block text-center max-w-40 w-full rounded-full border border-border">More work</TransitionLink>
    </section>
  )
}

export default ProjectShowCaseMobile
