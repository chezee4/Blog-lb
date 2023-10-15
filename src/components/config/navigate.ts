import { v4 as uuidv4 } from "uuid";
import { Navigate } from "@/types";

export const navigate: Navigate[] = [
  { title: "PORTFOLIO", link: "/portfolio", id: uuidv4() },
  { title: "BLOG", link: "/blog", id: uuidv4() },
  { title: "CV", link: "/cv", id: uuidv4() },
  { title: "STORE", link: "/store", id: uuidv4() },
  { title: "FREELANCE", link: "/freelance", id: uuidv4() },
  { title: "ABOUT ME", link: "/about_me", id: uuidv4() },
  { title: "CONTACT", link: "/contact", id: uuidv4() },
];
