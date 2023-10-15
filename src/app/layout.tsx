import "./globals.css";

import Image from "next/image";
import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ButtonList from "@/components/ui/button-list";

import { cn } from "@/lib/utils";

import artPrimary from "../../public/art-primary.svg";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laba №4",
  description: "Laba №4 by cheze4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(" min-h-[100dvh]", montserrat.className)}>
        <Header />
        <main className=" max-w-[1224px] m-auto px-3 mb-32 sm:mb-48 overflow-hidden">
          <>
            <section className="mt-16 lg:mt-10 flex justify-between items-center gap-7">
              <div className="max-w-[640px]">
                <h1 className=" text-[20px] leading-normal mm:text-[40px] sm:text-[52px] text-custom-red font-bold">
                  Blog Posts
                </h1>
                <p className=" text-[20px] leading-normal mm:text-[40px] sm:text-[40px] lg:text-[52px] font-medium text-custom-color mb-8">
                  I think so, this is it.
                </p>
                <p className="text-[12px] mm:text-[14px] lg:text-[18px] text-custom-color">
                  Design begins after I begin to think about how to present an
                  experience most successfully, whether a button I put in can
                  solve a problem. The only point in design is not ui design, if
                  the user does not have a good experience at the end of the
                  product, the design will be considered unsuccessful in my
                  opinion.
                </p>
                <ButtonList />
              </div>
              <div className="-translate-y-7 hidden mx:block min-w-[380px]">
                <Image src={artPrimary} alt="art" className="" />
              </div>
            </section>
            {children}
          </>
        </main>
        <Footer />
      </body>
    </html>
  );
}
