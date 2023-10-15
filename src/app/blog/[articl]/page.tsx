import { notFound } from "next/navigation";
import Image from "next/image";

import pinkMonitor from "../../../../public/pink-monitor.jpg";
import nightLaptop from "../../../../public/night-laptop.jpg";
import artPrimary from "../../../../public/art-primary.svg";

import { textDescription } from "@/components/config/text";
import ButtonList from "@/components/ui/button-list";

type ArticlePageProps = {
  params: { articl: string };
};
  
export default function ArticlPage({ params }: ArticlePageProps) {

  if (isNaN(+params.articl.charAt(params.articl.length - 1)) || (+params.articl.charAt(params.articl.length - 1) > 6)) {
    notFound();
  } 
  const img = +params.articl.charAt(params.articl.length - 1) % 2 == 0 ? nightLaptop : pinkMonitor;
  return (
    <>
        <section className="mt-16 lg:mt-10 flex justify-between items-center gap-7">
              <div className="max-w-[640px]">
                <h1 className=" text-[20px] leading-normal mm:text-[40px] sm:text-[52px] text-custom-red font-bold">
                  Blog Posts
                </h1>
                <h2 className=" text-[20px] leading-normal mm:text-[40px] sm:text-[40px] lg:text-[52px] font-medium text-custom-color mb-8">
                  I think so, this is it.
                </h2>
                <p className="text-[12px] mm:text-[14px] lg:text-[18px] text-custom-color">
                  Design begins after I begin to think about how to present an
                  experience most successfully, whether a button I put in can
                  solve a problem. The only point in design is not ui design, if
                  the user does not have a good experience at the end of the
                  product, the design will be considered unsuccessful in my
                  opinion.
                </p>
                <ButtonList/>
              </div>
              <div className="-translate-y-7 hidden mx:block min-w-[380px]">
                <Image src={artPrimary} loading="eager" alt="art"  />
              </div>
            </section>
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
