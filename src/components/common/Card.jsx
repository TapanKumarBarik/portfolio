// components/common/Card.jsx
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
