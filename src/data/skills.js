// data/skills.js
import {
  Globe,
  Server,
  Rocket,
  Code,
  Database,
  Smartphone,
} from "lucide-react";

export const skills = {
  frontend: {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React/Next.js", level: 95, icon: Globe },
      { name: "TypeScript", level: 90, icon: Code },
      { name: "Tailwind CSS", level: 85, icon: Code },
      { name: "Vue.js", level: 80, icon: Code },
    ],
  },
  backend: {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, icon: Server },
      { name: "Python", level: 85, icon: Code },
      { name: "PostgreSQL", level: 80, icon: Database },
      { name: "MongoDB", level: 75, icon: Database },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: Rocket,
    skills: [
      { name: "Docker", level: 85, icon: Rocket },
      { name: "AWS", level: 80, icon: Globe },
      { name: "Git", level: 95, icon: Code },
      { name: "Figma", level: 70, icon: Smartphone },
    ],
  },
};
