import { textForArticl } from "./text";
import { Articl as ArticlType } from "@/types";
import { v4 as uuidv4 } from "uuid";
import pinkMonitor from "../../../public/pink-monitor.jpg";
import nightLaptop from "../../../public/night-laptop.jpg";
export const Articles: ArticlType[] = [
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: pinkMonitor,
  },
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: nightLaptop,
  },
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: pinkMonitor,
  },
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: nightLaptop,
  },
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: pinkMonitor,
  },
  {
    id: uuidv4(),
    title: "This way is wrong about UI Design.",
    dayOfPublication: "NOV 23 2020",
    description: textForArticl,
    img: nightLaptop,
  },
];
