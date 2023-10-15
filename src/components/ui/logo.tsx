import Image from "next/image";
import HeaderLogo from "../../../public/logo-header.svg";
import FooterLogo from "../../../public/logo-header.svg";
import { cn } from "@/lib/utils";

type LogoProps = {
  typelogo: "header" | "footer";
  alt: string;
  className?: string;
};
export default function Logo({ typelogo, alt, className }: LogoProps) {
  const logo = typelogo === "header" ? HeaderLogo : FooterLogo;
  return <Image src={logo} alt={alt} className={cn(className)} />;
}
