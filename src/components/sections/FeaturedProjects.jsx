// components/sections/FeaturedProjects.jsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { usePortfolio } from "../../contexts";
import { Card, Button } from "../common";

export const FeaturedProjects = () => {
  const { projects, setActiveSection } = usePortfolio();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ✨ Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Showcasing my best work and innovative solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            className="group relative p-6 overflow-hidden"
            hover={true}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              {/* Project Icon */}
              <div className="text-4xl mb-4">{project.image}</div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.status}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-green-900/30 dark:to-purple-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-gray-500 dark:text-gray-400 text-sm px-2 py-1">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">
                      {highlight}
                    </div>
                  </div>
                ))}
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
                  className="px-4"
                >
                  Code
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setActiveSection("projects")}
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
};
