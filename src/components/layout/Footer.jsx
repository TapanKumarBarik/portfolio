// components/layout/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { usePortfolio } from "../../contexts";

export const Footer = () => {
  const { personalInfo, navigation, setActiveSection } = usePortfolio();

  const recentActivity = [
    { label: "Published new blog post", color: "bg-green-500" },
    { label: "Updated portfolio design", color: "bg-purple-500" },
    { label: "Contributed to open source", color: "bg-blue-500" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                {personalInfo.avatar}
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building the future, one line of code at a time. ✨
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Latest Activity */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Latest Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 ${activity.color} rounded-full`}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {activity.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 {personalInfo.name}. Crafted with React & ❤️
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Last updated: {personalInfo.status.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
