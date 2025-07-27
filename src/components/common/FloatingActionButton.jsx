// components/common/FloatingActionButton.jsx
import { Mail } from "lucide-react";
import { usePortfolio } from "../../contexts";

export const FloatingActionButton = () => {
  const { setActiveSection } = usePortfolio();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setActiveSection("contact")}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full shadow-2xl text-white hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Contact"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
};
