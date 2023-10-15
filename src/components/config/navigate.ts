import { v4 as uuidv4 } from "uuid";
import { Navigate } from "@/types";

export const navigate: Navigate[] = [
  { title: "PORTFOLIO", link: "/", id: uuidv4() },
  { title: "BLOG", link: "/", id: uuidv4() },
  { title: "CV", link: "/", id: uuidv4() },
  { title: "STORE", link: "/", id: uuidv4() },
  { title: "FREELANCE", link: "/", id: uuidv4() },
  { title: "ABOUT ME", link: "/", id: uuidv4() },
  { title: "CONTACT", link: "/", id: uuidv4() },
];
