// data/index.js
import { personalInfo } from "./personalInfo";
import { navigation } from "./navigation";
import { projects } from "./projects";
import { experience } from "./experience";
import { skills } from "./skills";
import { achievements, achievementCategories } from "./achievements";
import { blogPosts } from "./blogPosts";
import { memories } from "./memories";

export const portfolioData = {
  personalInfo,
  navigation,
  projects,
  experience,
  skills,
  achievements,
  achievementCategories,
  blogPosts,
  memories,
};

export * from "./personalInfo";
export * from "./navigation";
export * from "./projects";
export * from "./experience";
export * from "./skills";
export * from "./achievements";
export * from "./blogPosts";
export * from "./memories";
