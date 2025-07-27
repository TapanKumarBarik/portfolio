// components/layout/Layout.jsx
import React from "react";
import { usePortfolio } from "../../contexts";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainContent } from "./MainContent";
import { FloatingActionButton } from "../common/FloatingActionButton";
import { BackgroundPattern } from "../common/BackgroundPattern";

export const Layout = () => {
  const { loading } = usePortfolio();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Sidebar />

      <main className="ml-80 min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </main>

      <FloatingActionButton />
      <BackgroundPattern />
    </div>
  );
};
