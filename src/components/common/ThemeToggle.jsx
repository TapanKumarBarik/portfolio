// components/common/ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts";

export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

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
