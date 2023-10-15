"use client"
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { filter } from "./config/filter";

export default function Filter() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <ul className="flex mb-20 max-x-[800px] overflow-x-scroll h-16 pt-3 whitespace-nowrap">
      {filter.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={cn("whitespace-nowrap mr-8 before:left-[50%] before:-translate-x-[50%] transition-all duration-300 before:transition-all cursor-pointer relative text-lg text-custom-color font-bold before:h-[1px] before:bg-custom-red before:content-[''] before:bottom-0 before:absolute before:w-0", {"text-2xl text-custom-red before:w-[110%] -translate-y-2": activeIndex === index})}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
