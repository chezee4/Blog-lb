import React from "react";
import Image from "next/image";
import hireMe from "../../../../public/hire_me.svg";
export default function BurgerMark() {
  return (
    <>
      <Image
        src={hireMe}
        alt="hire me"
        aria-label="hire me"
        aria-braillelabel="hire me"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="19"
        viewBox="0 0 71 19"
        fill="none"
      >
        <path
          d="M63.9933 0.749893C63.6138 0.275888 63.0394 0 62.4322 0H2C0.895432 0 0 0.895431 0 2V17C0 18.1046 0.895424 19 2 19H62.4322C63.0394 19 63.6138 18.7241 63.9933 18.2501L69.999 10.7501C70.5841 10.0194 70.5841 8.9806 69.999 8.24989L63.9933 0.749893Z"
          fill="#5A47AB"
        />
        <text x="5" y="12" font-family="Montserrat" font-size="9" fill="#FFF">
          Close the Door
        </text>
      </svg>
    </>
  );
}
