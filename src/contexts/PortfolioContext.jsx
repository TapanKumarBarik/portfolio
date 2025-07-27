// contexts/PortfolioContext.jsx
import React, { createContext, useContext, useState } from "react";
import { portfolioData } from "../data";
import { achievementCategories } from "../data/achievements";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    // Optional: Update URL without page reload
    window.history.pushState(null, "", `#${sectionId}`);
  };

  const value = {
    // Data
    ...portfolioData,
    achievementCategories,

    // State
    activeSection,
    loading,
    selectedBlogPost,

    // Actions
    setActiveSection: navigateToSection,
    setLoading,
    setSelectedBlogPost,

    // Computed values
    currentNavItem: portfolioData.navigation.find(
      (item) => item.id === activeSection
    ),
    isHomePage: activeSection === "home",
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
