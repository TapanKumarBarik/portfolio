// components/layout/Sidebar.jsx
import React from "react";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { usePortfolio, useTheme } from "../../contexts";
import { ThemeToggle } from "../common/ThemeToggle";

export const Sidebar = () => {
  const { personalInfo, navigation, activeSection, setActiveSection } =
    usePortfolio();

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
            {personalInfo.avatar}
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
          {personalInfo.name}
        </h2>
        <p className="text-green-600 dark:text-green-400 text-center font-medium mb-2">
          {personalInfo.title}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          {personalInfo.subtitle}
        </p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
              activeSection === item.id
                ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105`
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                activeSection === item.id
                  ? "bg-white/20"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <span className="font-medium">{item.label}</span>
            {activeSection === item.id && (
              <ChevronRight className="w-4 h-4 ml-auto animate-pulse" />
            )}
          </button>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Quick Stats
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(personalInfo.stats).map(([key, value]) => {
            const icons = {
              projects: "🚀",
              commits: "💻",
              stars: "⭐",
              coffee: "☕",
            };

            return (
              <div
                key={key}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center"
              >
                <div className="text-lg mb-1">{icons[key]}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                  {key}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-3 justify-center">
          <a
            href={personalInfo.social.github}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <ThemeToggle />
      </div>
    </div>
  );
};
