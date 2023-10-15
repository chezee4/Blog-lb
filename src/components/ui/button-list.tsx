import ButtonLink from "./button-link"
export default function ButtonList() {
  return (
    <div className="flex gap-2 mm:gap-4 mt-8 justify-center mm:justify-normal">
    <ButtonLink
      href=""
      text="TWITTER"
      className=" bg-[#47ACDF] hover:bg-[#3686af] transition-all duration-200 "
    />
    <ButtonLink
      href=""
      text="LINKEDIN"
      className=" bg-[#1275B1]  hover:bg-[#3686af]  transition-all duration-200"
    />
    <ButtonLink
      href=""
      text="MEDIUM"
      className=" bg-black hover:bg-slate-800  transition-all duration-200"
    />
  </div>
  )
}
