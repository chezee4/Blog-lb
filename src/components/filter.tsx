import { filter } from "./config/filter";
export default function Filter() {
  return (
    <ul className="flex mb-20 max-x-[800px] overflow-x-scroll whitespace-nowrap">
      {filter.map((item, index) => (
        <li
          key={index}
          className="whitespace-nowrap mr-8 before:left-[50%] before:-translate-x-[50%] transition-all duration-300 before:transition-all cursor-pointer relative text-lg text-custom-color font-bold active:text-2xl active:text-custom-red before:h-[1px] before:bg-custom-red before:content-[''] before:bottom-0 before:absolute before:w-0 active:before:w-[110%] active:-translate-y-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
``;
