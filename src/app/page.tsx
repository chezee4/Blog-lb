import Articles from "@/components/articles";
import Filter from "@/components/filter";

export default function Home() {
  return (
    <>
      <section className="mt-32 mm:mt-48 mb-10">
        <span className=" text-xl font-bold inline-block mb-8 text-custom-red sm:hidden">BLOG POSTS</span>
        <Filter />
        <Articles />
      </section>
    </>
  );
}
