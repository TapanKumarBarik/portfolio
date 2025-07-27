// pages/AchievementsPage.jsx
import React, { useState } from "react";
import {
  Award,
  Trophy,
  Star,
  Medal,
  Target,
  Filter,
  ExternalLink,
  Calendar,
  CheckCircle,
  Clock,
  Bookmark,
  Shield,
  Download,
  Eye,
  AlertCircle,
} from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card, Button } from "../components/common";

const AchievementsPage = () => {
  const { achievements, achievementCategories } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid, timeline

  const types = [
    { id: "all", label: "All Types", count: achievements.length },
    {
      id: "certification",
      label: "Certifications",
      count: achievements.filter((a) => a.type === "certification").length,
    },
    {
      id: "achievement",
      label: "Achievements",
      count: achievements.filter((a) => a.type === "achievement").length,
    },
  ];

  const filteredAchievements = achievements.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    const typeMatch = selectedType === "all" || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const getStatusInfo = (item) => {
    if (item.type === "certification" && item.expiryDate) {
      const expiry = new Date(item.expiryDate);
      const now = new Date();
      const daysUntilExpiry = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

      if (daysUntilExpiry < 0) {
        return {
          status: "expired",
          text: "Expired",
          color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
        };
      } else if (daysUntilExpiry < 90) {
        return {
          status: "expiring",
          text: `Expires in ${daysUntilExpiry} days`,
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
        };
      } else {
        return {
          status: "valid",
          text: "Valid",
          color:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
        };
      }
    }
    return {
      status: "permanent",
      text: "Achievement",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    };
  };

  const CertificationCard = ({ item }) => {
    const status = getStatusInfo(item);

    return (
      <Card className="group relative p-6 overflow-hidden" hover={true}>
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity`}
        ></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white text-xl`}
              >
                {item.icon}
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${status.color}`}
                >
                  {status.text}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold text-lg`}
              >
                {item.year}
              </span>
            </div>
          </div>

          {/* Title & Category */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm mb-3 inline-block">
            {item.category}
          </span>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Metrics */}
          {item.metrics && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(item.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Credential Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Shield className="w-4 h-4" />
              <span>Issued by: {item.issuer}</span>
            </div>
            {item.credentialId && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Bookmark className="w-4 h-4" />
                <span>ID: {item.credentialId}</span>
              </div>
            )}
            {item.expiryDate && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>
                  Expires: {new Date(item.expiryDate).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {item.verificationUrl && (
              <Button
                size="sm"
                variant="secondary"
                icon={<ExternalLink className="w-4 h-4" />}
                onClick={() => window.open(item.verificationUrl, "_blank")}
                className="flex-1"
              >
                Verify
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              icon={<Eye className="w-4 h-4" />}
              className="px-3"
            >
              View
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  const TimelineView = () => (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500"></div>

      {filteredAchievements
        .sort((a, b) => new Date(b.year) - new Date(a.year))
        .map((item, index) => (
          <div key={item.id} className="relative flex items-start gap-6 mb-8">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white text-lg z-10 flex-shrink-0`}
            >
              {item.icon}
            </div>

            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.year}
                    </span>
                    {item.type === "certification" && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            getStatusInfo(item).color
                          }`}
                        >
                          {getStatusInfo(item).text}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {item.verificationUrl && (
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<ExternalLink className="w-4 h-4" />}
                    onClick={() => window.open(item.verificationUrl, "_blank")}
                  >
                    Verify
                  </Button>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {item.description}
              </p>

              {item.metrics && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(item.metrics)
                    .slice(0, 3)
                    .map(([key, value]) => (
                      <span
                        key={key}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {key}: {value}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {achievements?.length || 0}
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Total</div>
        </Card>
        {/* ...other stats... */}
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {(achievementCategories?.length || 1) - 1}
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            Categories
          </div>
        </Card>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl mb-6">
          <Trophy className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Achievements & Certifications
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional certifications, awards, and milestones that showcase my
          expertise and commitment to continuous learning.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {achievements.length}
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Total</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {
              achievements.filter(
                (a) =>
                  a.type === "certification" &&
                  (!a.expiryDate || new Date(a.expiryDate) > new Date())
              ).length
            }
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            Valid Certs
          </div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {achievements.filter((a) => a.type === "achievement").length}
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">Awards</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {achievementCategories.length - 1}
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            Categories
          </div>
        </Card>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* View Mode Toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              viewMode === "grid"
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("timeline")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              viewMode === "timeline"
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            Timeline
          </button>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedType === type.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {type.label} ({type.count})
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {achievementCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className="bg-white/20 px-1 rounded text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {viewMode === "timeline" ? (
        <TimelineView />
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <CertificationCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No items found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your filters to see more achievements and
            certifications.
          </p>
        </div>
      )}

      {/* Expiring Certifications Alert */}
      {achievements.filter((a) => {
        if (a.type !== "certification" || !a.expiryDate) return false;
        const daysUntilExpiry = Math.ceil(
          (new Date(a.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)
        );
        return daysUntilExpiry > 0 && daysUntilExpiry < 90;
      }).length > 0 && (
        <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                Certifications Expiring Soon
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                Some certifications are expiring within 90 days. Consider
                renewing them to maintain your credentials.
              </p>
              <div className="space-y-1">
                {achievements
                  .filter((a) => {
                    if (a.type !== "certification" || !a.expiryDate)
                      return false;
                    const daysUntilExpiry = Math.ceil(
                      (new Date(a.expiryDate) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    );
                    return daysUntilExpiry > 0 && daysUntilExpiry < 90;
                  })
                  .map((cert) => {
                    const daysUntilExpiry = Math.ceil(
                      (new Date(cert.expiryDate) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    );
                    return (
                      <div
                        key={cert.id}
                        className="text-sm text-yellow-700 dark:text-yellow-300"
                      >
                        • {cert.title} - expires in {daysUntilExpiry} days
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AchievementsPage;
