import Image from "next/image";
import logoFooter from "../../public/logo-footer.svg";
export default function Footer() {
  return (
    <footer className="">
      <div className=" px-3 inline-flex mb-11 justify-center items-end h-full w-full ">
        <Image src={logoFooter} alt="footer logo" className=" max-w-[200px] mm:max-w-[100%] " />
      </div>
    </footer>
  );
}
