// pages/ProjectsPage.jsx
import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card, Button } from "../components/common";

const ProjectsPage = () => {
  const { projects } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const statuses = ["All", ...new Set(projects.map((p) => p.status))];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch =
      selectedStatus === "All" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my creative work, innovative solutions, and technical
          expertise across various domains.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Category:
          </span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Status:
          </span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group relative p-8 overflow-hidden"
            hover={true}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-purple-400/5 group-hover:from-green-400/10 group-hover:to-purple-400/10 transition-all"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{project.image}</div>
                <div className="flex gap-2">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                    >
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <Button
                    size="sm"
                    className="flex-1"
                    icon={<ExternalLink className="w-4 h-4" />}
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    Live Demo
                  </Button>
                )}

                <Button
                  variant="secondary"
                  size="sm"
                  icon={<Github className="w-4 h-4" />}
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className={project.demoUrl ? "px-4" : "flex-1"}
                >
                  {project.demoUrl ? "Code" : "View Code"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your filters to see more projects.
          </p>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 rounded-3xl p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Project Statistics
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Total Projects", value: projects.length, icon: "🚀" },
            {
              label: "Live Projects",
              value: projects.filter((p) => p.status === "Live").length,
              icon: "🌐",
            },
            {
              label: "Open Source",
              value: projects.filter((p) => p.status === "Open Source").length,
              icon: "📖",
            },
            { label: "Categories", value: categories.length - 1, icon: "📂" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
