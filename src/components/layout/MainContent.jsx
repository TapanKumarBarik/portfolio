// components/layout/MainContent.jsx
import React, { Suspense } from "react";
import { usePortfolio } from "../../contexts";
import { LoadingSpinner } from "../common/LoadingSpinner";

// Lazy load pages for better performance
const HomePage = React.lazy(() => import("../../pages/HomePage"));
const ExperiencePage = React.lazy(() => import("../../pages/ExperiencePage"));
const ProjectsPage = React.lazy(() => import("../../pages/ProjectsPage"));
const BlogPage = React.lazy(() => import("../../pages/BlogPage"));
const AchievementsPage = React.lazy(() =>
  import("../../pages/AchievementsPage")
);
const MemoriesPage = React.lazy(() => import("../../pages/MemoriesPage"));
const ContactPage = React.lazy(() => import("../../pages/ContactPage"));

const pageComponents = {
  home: HomePage,
  experience: ExperiencePage,
  projects: ProjectsPage,
  blog: BlogPage,
  achievements: AchievementsPage,
  memories: MemoriesPage,
  contact: ContactPage,
};

export const MainContent = () => {
  const { activeSection } = usePortfolio();
  const PageComponent = pageComponents[activeSection] || HomePage;

  return (
    <div className="px-8 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <PageComponent />
      </Suspense>
    </div>
  );
};
