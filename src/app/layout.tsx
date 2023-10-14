import "./globals.css";

import type { Metadata } from "next";

import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

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
      <body>{children}</body>
    </html>
  );
}
