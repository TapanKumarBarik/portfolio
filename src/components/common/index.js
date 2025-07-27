// components/common/index.js
import React from "react";
import { Moon, Sun, Mail } from "lucide-react";

// Button Component
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-purple-600 text-white hover:shadow-lg hover:scale-105 focus:ring-green-500",
    secondary:
      "border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-500",
    ghost:
      "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

// Card Component
export const Card = ({
  children,
  className = "",
  hover = true,
  gradient = false,
  ...props
}) => {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-2xl shadow-xl";
  const hoverClasses = hover
    ? "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    : "";
  const gradientClasses = gradient
    ? "bg-gradient-to-br from-green-50 to-purple-50 dark:from-green-900/20 dark:to-purple-900/20"
    : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// LoadingSpinner Component
export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} border-2 border-green-500 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

// ThemeToggle Component
export const ThemeToggle = () => {
  // Import useTheme hook inline to avoid circular dependency issues
  const { darkMode, toggleDarkMode } = React.useContext(
    React.createContext({ darkMode: false, toggleDarkMode: () => {} })
  );

  return (
    <button
      onClick={toggleDarkMode}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="font-medium">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

// FloatingActionButton Component
export const FloatingActionButton = () => {
  const handleContactClick = () => {
    // Simple contact action - can be customized
    window.location.href = "#contact";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleContactClick}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full shadow-2xl text-white hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Contact"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
};

// BackgroundPattern Component
export const BackgroundPattern = () => (
  <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
  </div>
);

// ErrorBoundary Component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're sorry for the inconvenience. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
