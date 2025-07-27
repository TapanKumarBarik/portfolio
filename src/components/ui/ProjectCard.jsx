// components/ui/ProjectCard.jsx
import React from "react";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import { Card, Button } from "../common";

export const ProjectCard = ({
  project,
  featured = false,
  compact = false,
  onClick,
}) => {
  return (
    <Card
      className={`group relative overflow-hidden cursor-pointer ${
        featured ? "ring-2 ring-green-500 ring-opacity-50" : ""
      } ${compact ? "p-4" : "p-6"}`}
      hover={true}
      onClick={onClick}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-purple-400/5 group-hover:from-green-400/10 group-hover:to-purple-400/10 transition-all"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={compact ? "text-3xl" : "text-4xl"}>
            {project.image}
          </div>
          <div className="flex gap-2">
            {featured && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                ⭐ Featured
              </span>
            )}
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
              {project.status}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3
          className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${
            compact ? "text-sm line-clamp-2" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, compact ? 2 : 3).map((tech) => (
            <span
              key={tech}
              className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > (compact ? 2 : 3) && (
            <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
              +{project.tech.length - (compact ? 2 : 3)} more
            </span>
          )}
        </div>

        {/* Metrics (if available) */}
        {project.metrics && !compact && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {Object.entries(project.metrics)
              .slice(0, 3)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                    {key}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button
              size="sm"
              className="flex-1"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demoUrl, "_blank");
              }}
            >
              {compact ? "Demo" : "Live Demo"}
            </Button>
          )}

          <Button
            variant="secondary"
            size="sm"
            icon={<Github className="w-4 h-4" />}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, "_blank");
            }}
            className={project.demoUrl ? "px-3" : "flex-1"}
          >
            {project.demoUrl
              ? compact
                ? ""
                : "Code"
              : compact
              ? "Code"
              : "View Code"}
          </Button>
        </div>

        {/* Project Stats (compact mode) */}
        {compact && project.metrics && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              {project.metrics.stars && (
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>{project.metrics.stars}</span>
                </div>
              )}
              {project.metrics.views && (
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{project.metrics.views}</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.category}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
