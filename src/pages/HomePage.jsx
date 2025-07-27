// pages/HomePage.jsx
import React from "react";
import {
  Rocket,
  Download,
  ExternalLink,
  Github,
  Globe,
  Server,
} from "lucide-react";
import { usePortfolio } from "../contexts";
import { Button, Card } from "../components/common";
import { Hero } from "../components/sections/Hero";
import { SkillsGrid } from "../components/sections/SkillsGrid";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";

const HomePage = () => {
  const { personalInfo, projects, skills } = usePortfolio();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Overview */}
      <SkillsGrid />
    </div>
  );
};

export default HomePage;
