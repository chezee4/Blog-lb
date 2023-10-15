import "./globals.css";

import Image from "next/image";
import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { cn } from "@/lib/utils";


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
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
