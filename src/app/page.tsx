import Articles from "@/components/articles";
import Filter from "@/components/filter";
import ButtonList from "@/components/ui/button-list";
import Image from "next/image";
import artPrimary from "../../public/art-primary.svg";
export default function Home() {
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
      <section className="mt-32 mm:mt-48 mb-10">
        <h3 className=" text-xl font-bold inline-block mb-8 text-custom-red sm:hidden">BLOG POSTS</h3>
        <Filter />
        <Articles />
      </section>
    </>
  );
}
