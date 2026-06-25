import { socials } from "@/constants";
import Link from "next/link";
import MagnetText from "../ui/MagnetEffect";
import Image from "next/image";
import { FiArrowDownLeft } from "react-icons/fi";
import FloatEffect from "../ui/FloatEffect";
import Socials from "./Socials";

const Footer = () => {

  return (
    <footer className="bg-text mt-10 text-white">

      <section className="max-w-4xl mx-auto px-3 lg:px-7 pt-6 lg:pt-20 pb-0">
        <div className="relative flex items-center justify-between gap-6 pb-4 lg:pb-20 border-b border-gray/40">

          <div className="flex items-start gap-5">
            <h6 className="text-[clamp(42px,7vw,90px)] leading-none tracking-tight text-white">
               <Image
                src="/img3.png"
                alt="Mussadiq Khan"
                className="w-23 h-23 inline-block mr-4 rounded-full object-cover"
                width={32}
                height={32}
              /> Let&apos;s work
              <br />
              together
            </h6>
          </div>

          <div>
          <div className="hidden sm:block w-13 h-13 rounded-full">
            <FiArrowDownLeft size={22} />
          </div>
          <FloatEffect className="hidden lg:block" output={[0,250]}>
            <Link href="/contact">
              <MagnetText dot="no" text="Get in touch" className="absolute w-38 h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full -bottom-15 right-10" />
            </Link>
          </FloatEffect>
          <Link href="/contact">
            <MagnetText dot="no" text="Get in touch" className="absolute w-30 h-30 lg:w-38 lg:h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full -bottom-18 right-14 flex lg:hidden" />
          </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 pt-16">
          <Link
            href="mailto:mussadiqkhan6886@gmail.com"
          >
            <MagnetText className="border border-gray/40 rounded-full px-7 py-4 hover:bg-ctr bg-transparent transition-all duration-300 w-full justify-center items-center text-sm md:text-base" dot="no" text="mussadiqkhan6886@gmail.com" />
          </Link>

          <Link
            href="tel:+923189328584"
          >
            <MagnetText className="border border-gray/40 rounded-full px-7 py-4 hover:bg-ctr bg-transparent transition-all duration-300 w-full justify-center items-center text-sm md:text-base" dot="no" text="+92 318 9328584" />
            
          </Link>

          <Link
            href="/Resume.docx.pdf"
            download="/Resume.docx.pdf"
          >
            <MagnetText className="border border-gray/40 rounded-full px-7 py-4 hover:bg-ctr bg-transparent transition-all duration-300 w-full justify-center items-center text-sm md:text-base" dot="no" text="Download CV" />
          </Link>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-7 mt-4 lg:mt-14">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between flex-wrap gap-5 py-6 ">

          <div className="flex gap-8 flex-wrap">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray mb-1">
                Local time
              </p>
              <p className="text-sm text-white/70 tabular-nums">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })} GMT+05
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray mb-1">
                Location
              </p>
              <p className="text-sm text-white/70">Islamabad, PK</p>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-widest text-gray mb-1">
                Fuel
              </p>
              <p className="text-sm text-white/70">☕ Coffee</p>
            </div>
          </div>

          <p className="text-[11px] text-gray tracking-wide">
            © {new Date().getFullYear()} Mussadiq Khan. All rights reserved.
          </p>

        <div className="flex flex-col lg:items-end gap-2">
          <p className="text-[10px] uppercase tracking-widest text-gray">
            Socials
           </p>
          <Socials />
        </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;