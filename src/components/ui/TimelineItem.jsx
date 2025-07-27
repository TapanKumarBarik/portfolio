// components/ui/TimelineItem.jsx
import React from "react";
import { Calendar, MapPin, Star } from "lucide-react";
import { Card } from "../common";

export const TimelineItem = ({
  item,
  icon,
  iconColor = "from-green-400 to-purple-500",
  showLine = true,
  type = "experience", // experience, achievement, memory
}) => {
  return (
    <div className="relative flex gap-8 mb-12">
      {/* Timeline line */}
      {showLine && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-purple-500 rounded-full"></div>
      )}

      {/* Timeline dot/icon */}
      <div
        className={`relative z-10 w-16 h-16 bg-gradient-to-br ${iconColor} rounded-full flex items-center justify-center shadow-xl flex-shrink-0`}
      >
        {icon}
      </div>

      {/* Content */}
      <Card className="flex-1 p-8">
        {type === "experience" && (
          <>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-1">
                  {item.company}
                </p>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  {item.type && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">
                      {item.type}
                    </span>
                  )}
                </div>
              </div>

              {item.technologies && (
                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {item.description}
            </p>

            {item.achievements && (
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {item.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {type === "achievement" && (
          <>
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span
                    className={`bg-gradient-to-r ${iconColor} bg-clip-text text-transparent font-bold text-lg`}
                  >
                    {item.year}
                  </span>
                </div>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {item.description}
            </p>

            {item.metrics && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {type === "memory" && (
          <>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{item.image}</div>
              <span
                className={`bg-gradient-to-r ${iconColor} bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider`}
              >
                {item.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{item.date}</span>
              </div>
            </div>

            {item.emotion && (
              <div className="text-center mb-4">
                <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm">
                  Felt: {item.emotion}
                </span>
              </div>
            )}

            {item.impact && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Impact
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.impact}
                </p>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default TimelineItem;
