import { projects } from '@/constants'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import { twMerge } from 'tailwind-merge'

const ProjectShowCaseMobile = ({smaller, work, className}: {smaller?: boolean, work?: boolean, className?: string}) => {
  return (
    <section className={twMerge(`px-5 grid ${smaller ? "grid-cols-1" : "grid-cols-2"} place-items-center gap-17 items-center justify-center`, className)}>
      {projects.slice(0,4).map((item, i) => (
        <TransitionLink href={`/work/${item.link}`} key={i} className="h-[80vh] w-full block">
            <div className="relative w-full h-[78%]">
                <Image src={item.thumbnail} alt={item.title} fill className="object-center object-cover" />
            </div>
            <div>
                <h2 className="border-b border-gray text-4xl py-5">{item.title}</h2>
                <div className="py-3 flex justify-between items-center">
                    <p className="capitalize">{item.role}</p>
                    <p className="capitalize">{item.location}</p>
                </div>
            </div>
        </TransitionLink>
      ))}
      {!work && <TransitionLink href={"/work"} className="py-4 mt-2 block text-center max-w-40 w-full rounded-full border border-border">More work</TransitionLink>}
    </section>
  )
}

export default ProjectShowCaseMobile
