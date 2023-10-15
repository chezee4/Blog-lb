"use client"
import Link from "next/link";
import { navigate } from "./config/navigate";
import { cn } from "@/lib/utils";
import { useBurger } from "./context";

export default function Navigate() {
    const isOpen = useBurger(state => state.isOpen);
  return (
    <ul className={cn(" bg-white top-[60px] overflow-hidden h-0 z-[3]  left-0 w-[100dvw] lg:h-auto lg:w-auto absolute lg:static flex flex-col lg:flex-row lg:items-center pl-[30px] lg:ml-0 gap-7 text-custom-color lg:opacity-70 transition-all duration-500 ",
    {" h-[100dvh] transition-all duration-700 pt-16 ": isOpen})}>
      {navigate.map((item) => (
        <li
          key={item.id}
          className=" hover:text-[#5A47AB] hover:font-semibold hover:opacity-100 opacity-70 font-medium text-lg lg:text-sm transition-all ease-linear duration-200"
        >
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
