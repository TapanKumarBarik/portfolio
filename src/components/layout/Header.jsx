// components/layout/Header.jsx
import React from "react";
import { usePortfolio } from "../../contexts";

export const Header = () => {
  const { currentNavItem, personalInfo } = usePortfolio();

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {currentNavItem?.label || "Home"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {currentNavItem?.description || "Welcome to my digital space ✨"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {personalInfo.status.available && (
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  {personalInfo.status.availabilityText}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
