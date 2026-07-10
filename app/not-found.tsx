import TransitionLink from '@/components/comp/TransitionLink'
import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import React from 'react'

const NotFound = () => {
  return (
    <main className="bg-border relative text-ctr-dark flex items-center justify-center h-screen">
      <h1 className="font-semibold text-5xl md:text-6xl lg:text-8xl">
        Error 404
        <br />
        Are you lost?
      </h1>
       <div className="absolute left-3/4 bottom-[30%] lg:bottom-[50%] -translate-x-3/2 -translate-y-3/2">
          <FloatEffect output={[100,250]}>
            <TransitionLink href={'/'}>
              <MagnetText dot="no" text="Go Back Home" className="absolute w-38 h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-5 right-8" />
            </TransitionLink>
          </FloatEffect>
        </div>
    </main>
  )
}

export default NotFound
