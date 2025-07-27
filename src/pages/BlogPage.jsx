// pages/BlogPage.jsx
import React, { useState } from "react";
import {
  ChevronRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card, Button } from "../components/common";
import { formatDate } from "../utils/helpers";

const BlogPage = () => {
  const { blogPosts } = usePortfolio();
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Single Post View
  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-6 flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        <article className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="text-6xl text-center mb-6">{selectedPost.image}</div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(selectedPost.publishedAt)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{selectedPost.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{selectedPost.views} views</span>
            </div>
            <span>•</span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
              {selectedPost.category}
            </span>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedPost.content}
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Heart className="w-4 h-4" />
                <span>{selectedPost.likes}</span>
              </div>
              <Button size="sm" variant="secondary">
                Share Article
              </Button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          💡 Blog & Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Sharing knowledge, experiences, and insights from my journey in tech
          and development.
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
                ? "bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredPosts.find((post) => post.featured) && (
        <Card className="bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 p-8 mb-8">
          <span className="bg-gradient-to-r from-green-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
            ⭐ Featured Post
          </span>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {filteredPosts.find((post) => post.featured).title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {filteredPosts.find((post) => post.featured).excerpt}
              </p>

              <div className="flex items-center gap-4 mb-6 text-gray-500 dark:text-gray-400">
                <span>
                  {formatDate(
                    filteredPosts.find((post) => post.featured).publishedAt
                  )}
                </span>
                <span>•</span>
                <span>
                  {filteredPosts.find((post) => post.featured).readTime}
                </span>
                <span>•</span>
                <span>
                  {filteredPosts.find((post) => post.featured).views} views
                </span>
              </div>

              <Button
                onClick={() =>
                  setSelectedPost(filteredPosts.find((post) => post.featured))
                }
                icon={<ChevronRight className="w-5 h-5" />}
                size="lg"
              >
                Read Article
              </Button>
            </div>

            <div className="text-center">
              <div className="text-9xl">
                {filteredPosts.find((post) => post.featured).image}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Blog Posts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredPosts
          .filter((post) => !post.featured)
          .map((post) => (
            <Card
              key={post.id}
              className="group p-6 cursor-pointer"
              hover={true}
              onClick={() => setSelectedPost(post)}
            >
              <div className="text-4xl mb-4">{post.image}</div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-green-900/30 dark:to-purple-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
                <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            </Card>
          ))}
      </div>

      {/* Blog Stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {[
          {
            label: "Articles Written",
            value: `${blogPosts.length}+`,
            icon: "📝",
          },
          {
            label: "Total Reads",
            value: `${blogPosts.reduce((sum, post) => sum + post.views, 0)}+`,
            icon: "👁️",
          },
          {
            label: "Categories",
            value: categories.length - 1,
            icon: "📚",
          },
          {
            label: "Average Likes",
            value: Math.round(
              blogPosts.reduce((sum, post) => sum + post.likes, 0) /
                blogPosts.length
            ),
            icon: "⭐",
          },
        ].map((stat, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-green-50 to-purple-50 dark:from-green-900/20 dark:to-purple-900/20 p-6 text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
