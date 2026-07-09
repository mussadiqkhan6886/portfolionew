import FloatEffect from '@/components/ui/FloatEffect';
import MagnetText from '@/components/ui/MagnetEffect';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";

const Contact = () => {
  return (
    <main className="bg-text text-white py-20 px-6 sm:px-20 xl:px-0">
      <section className="max-w-4xl flex flex-col md:flex-row justify-between w-full mx-auto relative">
        <section className="block pt-14 md:hidden relative">
          <div>
              <h6 className="text-[clamp(42px,7vw,90px)] leading-none tracking-tight text-white">
                  <Image
                  src="/img3.png"
                  alt="Mussadiq Khan"
                  className="w-18 h-18 inline-block mr-4 rounded-full object-cover"
                  width={32}
                  height={32}
                /> Let&apos;s start a 
                <br />
                project together
              </h6>
            </div>
  
            <div className="absolute top-10 right-0 w-13 h-13 rounded-full">
              <FiArrowDownLeft size={22} />
            </div>

            <div className="flex flex-col mt-14 gap-3 items-start">
            <h2 className="text-xs text-gray/80 uppercase font-[450]">Contact Details</h2>
            <Link
              href="mailto:mussadiqkhan6886@gmail.com"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="mussadiqkhan6886@gmail.com" />
              </Link>

              <Link
                href="tel:+923189328584"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="+92 318 9328584" />
                
              </Link>

              <Link
                href="/Resume.docx.pdf"
                download="/Resume.docx.pdf"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="Download CV" />
              </Link>
            </div>
        </section>
        <section className="md:py-20">
          <h1 className="text-[clamp(42px,7vw,84px)] tracking-tight leading-none hidden md:block">Let's start a <br /> project together</h1>
          <div className="w-full relative pt-30 pb-30 sm:pb-40 border-b border-gray/50">
            <form>
              <div className="border-t border-gray/50 py-10 flex gap-8 w-full md:gap-10">
                <span className="inline-block mt-1 text-gray text-xs">
                  01
                </span>
                <div className="w-full">
                  <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='name'>What&apos;s your Name?</label>
                  <input autoComplete='off' id="name" type="text" placeholder="Mussadiq Khan *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
                </div>
              </div>
              <div className="border-t border-gray/50 py-10 flex gap-8 md:gap-10">
                <span className="inline-block mt-1 text-gray text-xs">
                  02
                </span>
                <div className="w-full">
                  <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='email'>What&apos;s your Email?</label>
                  <input autoComplete='off' id="email" type="text" placeholder="mussadiqkhan@gmail.com *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
                </div>
              </div>
              <div className="border-t border-gray/50 py-10 flex gap-8 md:gap-10">
                <span className="inline-block mt-1 text-gray text-xs">
                  03
                </span>
                <div className="w-full">
                  <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='organization'>What&apos;s the name of your organization?</label>
                  <input autoComplete='off' id="organization" type="text" placeholder="Scrupulous *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
                </div>
              </div>
              <div className="border-t border-gray/50 py-10 flex gap-8 md:gap-10">
                <span className="inline-block mt-1 text-gray text-xs">
                  04
                </span>
                <div className="w-full">
                  <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='service'>What services are you looking for??</label>
                  <input autoComplete='off' id="service" type="text" placeholder="Web Development, Optimization ... *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
                </div>
              </div>
              <div className="border-t border-gray/50 py-10 flex gap-8 md:gap-10">
                <span className="inline-block mt-1 text-gray text-xs">
                  05
                </span>
                <div className="w-full">
                  <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='message'>Your Message</label>
                  <input autoComplete='off' id="message" type="text" placeholder="Hello Mussadiq, can you help me with... *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
                </div>
              </div>
              <div>
                 <FloatEffect output={[100,250]}>
                  <button type="submit">
                    <MagnetText dot="no" text="Send it!" className="absolute w-34 h-34 sm:w-38 sm:h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full bottom-0 sm:-bottom-5 right-8" />
                  </button>
                </FloatEffect>
              </div>
            </form>
          </div>
        </section>
        
        <section className="w-[30%]  hidden md:block lg:w-[20%] pt-40">
          <div className="relative mb-34">
            <Image
              src="/img3.png"
              alt="Mussadiq Khan"
              className="w-23 h-23 inline-block rounded-full object-cover"
              width={32}
              height={32}
            />
            <FiArrowDownRight className="absolute left-0 -bottom-18" size={30} />
          </div>
          
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-xs text-gray/80 uppercase font-[450]">Contact Details</h2>
            <Link
              href="mailto:mussadiqkhan6886@gmail.com"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="mussadiqkhan6886@gmail.com" />
              </Link>

              <Link
                href="tel:+923189328584"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="+92 318 9328584" />
                
              </Link>

              <Link
                href="/Resume.docx.pdf"
                download="/Resume.docx.pdf"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="Download CV" />
              </Link>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Contact
