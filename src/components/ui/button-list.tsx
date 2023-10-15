import ButtonLink from "./button-link"
export default function ButtonList() {
  return (
    <div className="flex gap-2 mm:gap-4 mt-8 justify-center mm:justify-normal">
    <ButtonLink
      href=""
      text="TWITTER"
      className=" bg-[#47ACDF] hover:bg-[#1275B1]"
    />
    <ButtonLink
      href=""
      text="LINKEDIN"
      className=" bg-[#1275B1] hover:bg-[#47ACDF]"
    />
    <ButtonLink
      href=""
      text="MEDIUM"
      className=" bg-black hover:bg-slate-900"
    />
  </div>
  )
}
