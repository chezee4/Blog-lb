import { cn } from "@/lib/utils";

import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import medium from "../../../public/Medium.svg";
import Image from "next/image";
import Link from "next/link";

type ButtomProps = {
  text: "TWITTER" | "LINKEDIN" | "MEDIUM";
  className: string;
  href: string;
};

export default function ButtonLink({ href, text, className }: ButtomProps) {
  const icon =
    text == "LINKEDIN" ? linkedin : text == "MEDIUM" ? medium : twitter;
  return (
    <Link href={href} className={cn(" flex items-center text-[8px] p-[8px_35px_8px_13px] gap-2 mm:gap-5 mm:px-10 mm:pl-8 mm:py-3 font-medium text-white mm:text-xs transition",className)}>
      <Image src={icon} alt={text} className=" w-5 min-h-3 mm:w-auto" />
      {text}
    </Link>
  );
}
