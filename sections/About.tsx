import TransitionLink from '@/components/comp/TransitionLink'
import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import ResponsiveSplitText from '@/components/ui/ScrollEffect'

const About = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row justify-between gap-16 max-w-240 mx-auto px-5 lg:px-0 pt-28 lg:pt-40 ">
      <article className="max-w-2xl md:pr-5">
        <ResponsiveSplitText
          className='text-3xl tracking-tight leading-10'
          text={"Creating websites that turn ideas into exceptional digital experiences. Clean code, thoughtful design, and measurable results."}
        />
      </article>

      <div className="flex relative flex-row lg:flex-col gap-5 md:gap-18 h-70 sm:h-80 ">
        <article className="max-w-xs pr-3 sm:pr-0">
            I bridge the gap between design and development, crafting digital experiences that are as functional as they are beautiful.
        </article>

        <FloatEffect output={[100, -200]} className="absolute right-0 md:right-20 bottom-10 md:bottom-30 lg:left-0 lg:bottom-0">
          <TransitionLink href="/about">
            <MagnetText
              text="About Me"
              dot="no"
              strength={0.5}
              className="w-38 h-38 bg-text hover:bg-ctr-dark text-white rounded-full items-center justify-center transition-colors duration-300"
            />
          </TransitionLink>
        </FloatEffect>
      </div>
    </section>
  )
}

export default About