import React, { RefObject } from 'react'
import {motion, AnimatePresence, easeInOut} from "framer-motion"
import { THUMB_H, THUMB_W } from './ProjectsShowCase'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import MagnetText from '../ui/MagnetEffect'

interface Props {
    left: string, top: string, activeProject: any, cursorRef: RefObject<HTMLDivElement | null>, isHovering: boolean
}

const CustomCursor = ({left, top, cursorRef, isHovering, activeProject}: Props) => {
  return (
    <div
        ref={cursorRef}
        className={`pointer-events-none absolute ${left} ${top} z-50`}
      >
        <AnimatePresence>
          {isHovering && activeProject && (
            <motion.div
              key="thumb"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.35, ease: easeInOut }}
              style={{
                width: THUMB_W,
                height: THUMB_H,
                transform: "translate(-50%, -50%)",
              }}
              className="relative overflow-hidden "
            >
              {/* Crossfading image layer */}
              <AnimatePresence>
                <motion.div
                  key={activeProject.id}
                  initial={{ y:300 }}
                  animate={{ y: 0 }}
                  exit={{ y:300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover flex items-center justify-center"
                >
                  <Image src={activeProject.thumbnail}
                  alt={activeProject.title} width={360} height={300} className="object-cover w-full h-full object-center" />
                </motion.div>
              </AnimatePresence>

              <TransitionLink
                href={`/work/${activeProject.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <MagnetText text="View" className="pointer-events-auto rounded-full bg-ctr w-18 h-18 p-2 text-sm font-medium text-white text-center items-center justify-center" strength={0.9} dot={"no"} />
              </TransitionLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}

export default CustomCursor
