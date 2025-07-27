// components/sections/Hero.jsx
import React from "react";
import { Rocket, Download } from "lucide-react";
import { usePortfolio } from "../../contexts";
import { Button } from "../common";

export const Hero = () => {
  const { personalInfo, setActiveSection } = usePortfolio();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="relative z-10 text-center">
        {/* Avatar */}
        <div className="inline-block animate-bounce mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
            {personalInfo.avatar}
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-2xl mb-2 text-green-300">{personalInfo.title}</p>
        <p className="text-xl mb-8 text-purple-300">{personalInfo.subtitle}</p>

        {/* Bio */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="primary"
            size="lg"
            icon={<Rocket />}
            onClick={() => setActiveSection("projects")}
            className="bg-gradient-to-r from-green-500 to-purple-600"
          >
            Explore My Work
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={<Download />}
            className="border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10"
          >
            Download CV
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-green-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};
