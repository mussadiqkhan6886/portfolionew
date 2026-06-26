import React from 'react'
import ReactLenis from "lenis/react"
import StickyCard002 from '@/components/ui/CertificatesFloat'
import { cert } from '@/constants'

const Certificates = () => {
  return (
    <section className="h-screen w-full">
      <ReactLenis root>
        <div className="h-full w-full">
          <StickyCard002 cards={cert} />
        </div>
      </ReactLenis>
    </section>
  )
}

export default Certificates
