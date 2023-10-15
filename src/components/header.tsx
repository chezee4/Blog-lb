import Navigate from "./navigate";
import Burger from "./ui/burger";
import BurgerMark from "./ui/burger-mark";
import Logo from "./ui/logo";

export default function Header() {
  return (
    <header className="pt-5 lg:pt-[66px] lg:pb-[66px] bg-white">
      <nav className="max-w-[1200px] m-auto flex justify-between px-3">
        <div className=" flex gap-2 items-center">
         <div className=" w-[155px] overflow-x-hidden mm:overflow-auto mm:w-[220px]"> <Logo typelogo="header" alt="header logo" className="object-none object-right mm:object-cover h-[36px] mm:h-full " /></div>
          <BurgerMark />
        </div>
          <Navigate />
          <Burger/>
      </nav>
    </header>
  );
}
