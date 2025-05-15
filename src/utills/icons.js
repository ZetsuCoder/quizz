import { Code, File as FileHtml, Pencil, FileJson } from "lucide-react";

export const getCategoryIcon = (category) => {
  switch (category) {
    case "HTML":
      return FileHtml;
    case "CSS":
      return Pencil;
    case "JavaScript":
      return FileJson;
    case "React":
      return Code;
    default:
      return FileJson;
  }
};
