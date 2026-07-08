import FooterContact from "./FooterContact";
import Socials from "./Socials";

const Footer = () => {

  return (
    <footer className="bg-text lg:mt-10 text-white">

      <FooterContact />

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