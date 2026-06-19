import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/comp/Header";
import Footer from "@/components/comp/Footer";


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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  );
}
