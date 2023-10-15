import Articl from "./articl";
import { Articles as ArticlesConst } from "./config/articl";

export default function Articles() {
  return (
    <div className=" flex flex-col items-center sm:grid sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-y-20 m-auto">
      {ArticlesConst.map((articl, index) => (
        <Articl key={articl.id} {...articl} index={index + 1} />
      ))}
    </div>
  );
}
