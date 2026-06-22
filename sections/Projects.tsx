'use client';

import ProjectShowCaseMobile from '@/components/comp/ProjectShowCaseMobile';
import ProjectsShowcase from '@/components/comp/ProjectsShowCase';
import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [mobile, setMobile] = useState(false)

  const checkDevice = () => {
    setMobile(window.innerWidth <= 650)
  }

  useEffect(() => {
    checkDevice()

    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return (
    <section>
      {mobile ? <ProjectShowCaseMobile /> : <ProjectsShowcase /> }
    </section>
  )
}

export default Projects
