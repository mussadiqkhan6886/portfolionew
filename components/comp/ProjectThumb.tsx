'use client';

import Image from 'next/image';
import UseParallexImage from '@/lib/hooks/UseParallexImage';

interface Props {
    thumbnail: string
    logo: string
    title: string
}

const ProjectThumb = ({thumbnail, logo, title}: Props) => {

 const {containerRef, imageBoxRef, imageRef} = UseParallexImage(-15, 15)

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto w-full">
        <div className="relative w-full h-screen overflow-hidden" ref={imageBoxRef}>
            <Image ref={imageRef} src={thumbnail} priority={true} fetchPriority='high' alt={title + "thumbnail image"} width={1000} height={1000} className="absolute top-0 left-0 w-full h-[110%] md:h-[130%] object-cover object-center" />
        </div>
        <Image src={logo as string} alt={title + "logo"} width={150} height={150} className="w-30 h-30 object-contain object-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}

export default ProjectThumb
