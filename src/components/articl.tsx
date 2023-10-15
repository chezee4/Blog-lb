import Image from "next/image";
import { Articl as ArticlType } from "@/types";
import Link from "next/link";

type ArticlWithIndex = ArticlType & { index: number };

export default function Articl({
  id,
  index,
  title,
  dayOfPublication,
  description,
  img,
}: ArticlWithIndex) {
  return (
    <article className=" max-w-[590px]">
      <div>
        <Image src={img} alt={title} />
      </div>
      <span className=" inline-block mb-[14px] mt-2 text-[10px] leading-normal md:text-sm text-custom-color font-semibold">
        {dayOfPublication}
      </span>
      <h4 className=" mb-3 text-xl md:text-2xl font-semibold text-custom-red">{title}</h4>
      <p className=" mb-[30px] text-sm  md:text-base text-custom-color">{description}</p>
      <Link
        href={`/blog/${index}`}
        className=" text-sm  md:text-lg text-custom-red font-medium border-b border-custom-red"
      >
        READ MORE
      </Link>
    </article>
  );
}
