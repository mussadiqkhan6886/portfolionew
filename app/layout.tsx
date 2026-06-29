import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/comp/Header";
import Footer from "@/components/comp/Footer";
import { dSans } from "@/constants/font";
import SmoothScroll from "@/components/ui/SmoothScroll";
import IntroLoader from "@/components/ui/Intro";
import ReactLenis from "lenis/react"
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Mussadiq Khan | Freelance Web Developer",
  description: "Helping brands thrive in the digital world. Located in The Pakistan. Delivering tailor-made digital designs and building interactive websites from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${dSans.className}`}
    >
      <body className="min-h-full flex flex-col">
        <ReactLenis root >
          <Header />
          <PageTransition />
          <IntroLoader />
            <SmoothScroll> {children} </SmoothScroll>
          <Footer />
        </ReactLenis>
        </body>
    </html>
  );
}
