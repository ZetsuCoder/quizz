import {
  Code,
  File as FileHtml,
  Pencil,
  FileJson,
  Server,
  Database,
  Cpu,
  Smartphone,
  Zap,
  Terminal,
} from "lucide-react";

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
    case "Node.js":
      return Server;
    case "Express.js":
      return Terminal;
    case "MongoDB":
      return Database;
    case "PHP":
      return Code;
    case "Swift":
      return Smartphone;
    case "Java":
      return Cpu;
    case "Flutter":
      return Zap;
    case "Go":
      return Code;
    case "TypeScript":
      return Code;
    default:
      return FileJson;
  }
};
