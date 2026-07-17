import ContactForm from '@/components/comp/ContactForm';
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
          <ContactForm />
        </section>
        
        <section className="w-[30%]  hidden md:block lg:w-[20%] pt-40">
          <div className="relative mb-34">
            <Image
              src="/img3.png"
              alt="Mussadiq Khan"
              className="w-23 h-23 inline-block rounded-full object-cover"
              width={200}
              height={200}
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
