// components/ui/BlogCard.jsx
import React from "react";
import { ChevronRight, Calendar, Clock, Eye, Heart } from "lucide-react";
import { Card } from "../common";
import { formatDate } from "../../utils/helpers";

export const BlogCard = ({
  post,
  featured = false,
  compact = false,
  onClick,
}) => {
  return (
    <Card
      className={`group cursor-pointer ${
        featured
          ? "bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20"
          : ""
      } ${compact ? "p-4" : "p-6"}`}
      hover={true}
      onClick={onClick}
    >
      {featured && (
        <span className="bg-gradient-to-r from-green-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
          ⭐ Featured Post
        </span>
      )}

      <div className={compact ? "text-3xl mb-3" : "text-4xl mb-4"}>
        {post.image}
      </div>

      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-green-900/30 dark:to-purple-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        {featured && (
          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs">
            Trending
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors ${
          compact ? "text-lg" : featured ? "text-2xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${
          compact
            ? "text-sm line-clamp-2"
            : featured
            ? "text-lg line-clamp-3"
            : "line-clamp-3"
        }`}
      >
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex items-center gap-3 text-gray-500 dark:text-gray-400 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
          {!compact && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{post.views} views</span>
              </div>
            </>
          )}
        </div>

        <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
          >
            #{tag}
          </span>
        ))}
        {post.tags.length > (compact ? 2 : 3) && (
          <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
            +{post.tags.length - (compact ? 2 : 3)} more
          </span>
        )}
      </div>

      {/* Engagement Stats */}
      {!compact && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              By {post.author}
            </span>
          </div>

          {featured && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle share functionality
              }}
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors"
            >
              Share →
            </button>
          )}
        </div>
      )}

      {/* Reading Progress Indicator for Featured */}
      {featured && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-green-500 to-purple-600 h-1 rounded-full transition-all duration-300"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default BlogCard;
