// components/sections/SkillsGrid.jsx
import React from "react";
import { usePortfolio } from "../../contexts";
import { Card } from "../common";
import { SkillBar } from "../ui/SkillBar";

export const SkillsGrid = () => {
  const { skills } = usePortfolio();

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 Skills & Expertise
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillData]) => (
          <Card key={category} className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-purple-500 rounded-lg flex items-center justify-center">
                <skillData.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {skillData.title}
              </h3>
            </div>

            <div className="space-y-4">
              {skillData.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
