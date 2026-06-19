import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Idea from '@/sections/Idea'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Idea />
    </main>
  )
}

export default Home
