import HeroDetail from '@/components/comp/HeroDetail'
import { ScrollVelocity } from '@/components/ui/HeroLoopName'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-dvh relative bg-gray/98 overflow-hidden bg-cover xl:bg-contain">
      <div className="absolute w-22 h-dvh left-0 bg-gray hidden lg:block" />
      <div className="absolute w-screen h-screen inset-0 bg-black/10" />
      <HeroDetail />
  
      <ScrollVelocity
        texts={['Mussadiq Khan ✦']} 
        velocity={85}
        className="custom-scroll-text"
        numCopies={12}
        damping={100}
        stiffness={800}
      />
    </section>
  )
}

export default Hero
