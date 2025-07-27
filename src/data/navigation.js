// data/navigation.js
import {
  Sparkles,
  Rocket,
  Zap,
  Lightbulb,
  Trophy,
  Heart,
  Target,
} from "lucide-react";

export const navigation = [
  {
    id: "home",
    label: "Home",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
    description: "Welcome & Overview",
  },
  {
    id: "experience",
    label: "Journey",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
    description: "Professional Experience",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
    description: "Featured Work",
  },
  {
    id: "blog",
    label: "Blog",
    icon: Lightbulb,
    gradient: "from-orange-500 to-red-500",
    description: "Thoughts & Insights",
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    description: "Awards & Recognition",
  },
  {
    id: "memories",
    label: "Memories",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    description: "Special Moments",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Target,
    gradient: "from-indigo-500 to-purple-500",
    description: "Get In Touch",
  },
];
