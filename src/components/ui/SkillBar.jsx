// components/ui/SkillBar.jsx
import React, { useState, useEffect } from "react";

export const SkillBar = ({ name, level, icon: Icon, animated = true }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setAnimatedLevel(level);
    }
  }, [level, animated]);

  return (
    <div className="skill-bar">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <span className="text-gray-900 dark:text-white font-medium text-sm">
            {name}
          </span>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {level}%
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};
