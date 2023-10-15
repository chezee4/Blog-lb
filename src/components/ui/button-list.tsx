import ButtonLink from "./button-link"
export default function ButtonList() {
  return (
    <div className="flex gap-2 mm:gap-4 mt-8 justify-center mm:justify-normal">
    <ButtonLink
      href="https://twitter.com/home?lang=ua"
      text="TWITTER"
      className=" bg-[#015BA9] hover:bg-[#006BC7] transition-all duration-200 "
    />
    <ButtonLink
      href="https://www.linkedin.com/in/vadym-dufynets-6229ab27a/"
      text="LINKEDIN"
      className=" bg-[#1275B1]  hover:bg-[#3686af]  transition-all duration-200"
    />
    <ButtonLink
      href="https://github.com/chezee4"
      text="MEDIUM"
      className=" bg-black hover:bg-slate-800  transition-all duration-200"
    />
  </div>
  )
}
