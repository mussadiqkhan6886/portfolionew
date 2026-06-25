import About from '@/sections/About'
import Certificates from '@/sections/Certificates'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Idea from '@/sections/Idea'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Testimonials from '@/sections/Testimonials'
import WorkThumbnails from '@/sections/WorkThumbnails'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <WorkThumbnails />
      <Skills />
      <Experience />
      <Certificates />
      <Testimonials />
      <Idea />
    </main>
  )
}

export default Home
