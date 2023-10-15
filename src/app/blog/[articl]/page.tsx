import Image from "next/image";

import pinkMonitor from "../../../../public/pink-monitor.jpg";
import nightLaptop from "../../../../public/night-laptop.jpg";

import { textDescription } from "@/components/config/text";
type ArticlePageProps = {
  params: { articl: number };
};

export default function ArticlPage({ params }: ArticlePageProps) {
  const img = params.articl % 2 == 0 ? nightLaptop : pinkMonitor;
  return (
    <>
      <section className=" mt-40 sm:mt-52 flex mb-24 sm:mb-32 w-full">
        <div className=" inline-block m-auto w-full">
          <Image src={img} alt="product" className=" w-full" />
        </div>
      </section>
      <section className="w-full">
        <h1 className=" text-[#3A0CA3] text-xl sm:text-[42px] leading-normal font-bold mb-4">BLOG DETAILS H1</h1>
        <div className="mb-24">
          {textDescription.map((patagraph, index) => (
            <p key={index} className=" mb-5 font-medium text-sm sm:text-base">{patagraph}</p>
          ))}
        </div>
        <h2 className=" text-[#3A0CA3] text-lg sm:text-[36px] leading-normal font-bold mb-4">BLOG DETAILS H2</h2>
        <div className="mb-24">
          {textDescription.map((patagraph, index) => (
            <p key={index} className=" mb-5 font-medium text-sm sm:text-base">{patagraph}</p>
          ))}
        </div>
        <h3 className=" text-[#3A0CA3] text-base sm:text-[24px] leading-normal font-bold mb-4">BLOG DETAILS H3</h3>
        <div className="mb-24">
          {textDescription.map((patagraph, index) => (
            <p key={index} className=" mb-5 font-medium text-sm sm:text-base">{patagraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
