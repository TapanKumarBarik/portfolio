// pages/MemoriesPage.jsx
import React, { useState } from "react";
import { Calendar, Heart, Coffee, Code, Users, Star } from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card } from "../components/common";
import { formatDate } from "../utils/helpers";

const MemoriesPage = () => {
  const { memories } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(memories.map((m) => m.category))];
  const filteredMemories =
    selectedCategory === "All"
      ? memories
      : memories.filter((memory) => memory.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          💫 Cherished Memories
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Special moments, milestones, and experiences that have shaped my
          journey as a developer and person.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Memories Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredMemories.map((memory, index) => (
          <Card
            key={memory.id}
            className="group relative p-8 overflow-hidden"
            hover={true}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${memory.color} opacity-5 group-hover:opacity-10 transition-opacity`}
            ></div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{memory.image}</div>
                <span
                  className={`bg-gradient-to-r ${memory.color} bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider`}
                >
                  {memory.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {memory.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                {memory.description}
              </p>

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{memory.date}</span>
                </div>
              </div>

              {/* Additional Details */}
              {memory.emotion && (
                <div className="text-center mb-4">
                  <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm">
                    Felt: {memory.emotion}
                  </span>
                </div>
              )}

              {memory.impact && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {memory.impact}
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Memory Timeline */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Memory Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-500"></div>

          {memories
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((memory, index) => (
              <div
                key={memory.id}
                className="relative flex items-start gap-6 mb-8"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${memory.color} rounded-full flex items-center justify-center text-white text-xl z-10 flex-shrink-0`}
                >
                  {memory.image}
                </div>

                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {memory.title.replace(/\s[🌱🏆🎤⭐]/, "")}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{memory.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {memory.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">
                      {memory.category}
                    </span>
                    {memory.emotion && (
                      <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded text-xs">
                        {memory.emotion}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Card>

      {/* Journey Highlights */}
      <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Journey Highlights
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Coffee className="w-6 h-6" />,
              count: "2,847",
              label: "Cups of Coffee",
              color: "from-amber-400 to-orange-500",
            },
            {
              icon: <Code className="w-6 h-6" />,
              count: "500K+",
              label: "Lines of Code",
              color: "from-green-400 to-emerald-500",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              count: "50+",
              label: "Lives Impacted",
              color: "from-pink-400 to-rose-500",
            },
            {
              icon: <Star className="w-6 h-6" />,
              count: "1K+",
              label: "GitHub Stars",
              color: "from-yellow-400 to-amber-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.count}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Memory Categories */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Memory Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((category, index) => {
            const categoryMemories = memories.filter(
              (m) => m.category === category
            );
            const colors = [
              "from-green-400 to-emerald-500",
              "from-blue-400 to-indigo-500",
              "from-purple-400 to-pink-500",
              "from-yellow-400 to-orange-500",
            ];

            return (
              <div
                key={category}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${
                    colors[index % colors.length]
                  } rounded-2xl flex items-center justify-center text-white mx-auto mb-4 text-2xl`}
                >
                  {categoryMemories[0]?.image || "✨"}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {categoryMemories.length} memories
                </p>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm transition-colors"
                >
                  View All →
                </button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default MemoriesPage;
