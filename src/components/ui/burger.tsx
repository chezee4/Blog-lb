"use client";
import { cn } from "@/lib/utils";
import { useBurger } from "../context";

export default function Burger() {
  const { isOpen, setIsOpen } = useBurger();
  const handleCliclBurger = () => {
    setIsOpen();
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };
  return (
    <button
      title="burder"
      aria-labelledby="burger menu"
      aria-describedby="burger menu"
      aria-label="burger menu"
      className="lg:hidden flex flex-col h-10 w-12  justify-center items-center group outline-none"
      onClick={() => handleCliclBurger()}
    >
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-0.5 rounded-[30%] bg-custom-color transition-all ease-linear duration-200",
          {
            " rotate-[25deg] origin-top-right": isOpen,
          }
        )}
      />
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-0.5 rounded-[25%]  bg-custom-color"
        )}
      />
      <span
        className={cn(
          "inline-block h-[0.15rem] w-6 my-0.5 rounded-[25%]  bg-custom-color "
        )}
      />
      {/* <span
        className={cn({
          " fixed top-[60px] left-0 h-full w-full  z-[1] bg-[#ffffff] transition-all duration-[650ms] ":
            isOpen,
        })}
      ></span> */}
    </button>
  );
}
