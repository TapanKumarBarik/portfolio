// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
      },

      // Custom Fonts
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "Monaco",
          '"Cascadia Code"',
          '"Roboto Mono"',
          "Consolas",
          '"Courier New"',
          "monospace",
        ],
      },

      // Custom Spacing
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },

      // Custom Border Radius
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // Custom Box Shadows
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 40px -10px rgba(0, 0, 0, 0.04)",
        colored: "0 8px 25px -8px rgba(34, 197, 94, 0.3)",
        "colored-lg": "0 15px 35px -10px rgba(34, 197, 94, 0.3)",
      },

      // Custom Gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },

      // Custom Animations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px rgba(34, 197, 94, 0.5)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.6)",
          },
        },
      },

      // Custom Screens
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },

      // Custom Z-Index
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },

  plugins: [
    // Custom utilities plugin
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0,0,0,0.10)",
        },
        ".text-shadow-md": {
          textShadow: "4px 4px 8px rgba(0,0,0,0.12)",
        },
        ".text-shadow-lg": {
          textShadow: "15px 15px 30px rgba(0,0,0,0.11)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
