import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  Users,
  Briefcase,
  GraduationCap,
  Star,
  Heart,
  Camera,
  Coffee,
  Music,
  Book,
  ChevronRight,
  ExternalLink,
  Download,
  Sparkles,
  Zap,
  Rocket,
  Trophy,
  Target,
  Lightbulb,
  Globe,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Navigation items with creative icons
  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Sparkles className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "experience",
      label: "Journey",
      icon: <Rocket className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "blog",
      label: "Blog",
      icon: <Lightbulb className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: <Trophy className="w-5 h-5" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "memories",
      label: "Memories",
      icon: <Heart className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Target className="w-5 h-5" />,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  // Sample data - easily expandable structure
  const personalInfo = {
    name: "Tapan",
    title: "AI Engineering Specialist",
    subtitle: "Crafting Digital Magic ✨",
    bio: "Passionate developer with a love for creating innovative solutions and contributing to open source projects. Always eager to learn new technologies and build amazing digital experiences that make a difference.",
    email: "tapankumarbarik7@gmail.com",
    phone: "+91-9090075205",
    location: "Bengaluru , India",
    github: "https://github.com/TapanKumarBarik",
    linkedin: "https://www.linkedin.com/in/tapan-barik-7b896a171/",
    website: "https://tapan.dev",
  };

  // Blog posts structure - easily expandable
  const blogPosts = [
    {
      id: 1,
      title: "Building Production-Ready React Applications",
      excerpt:
        "Discover the essential strategies and best practices for creating scalable, maintainable React applications that can handle real-world demands.",
      content: `
        # Building Production-Ready React Applications
        
        Creating production-ready React applications requires more than just writing functional components...
        
        ## Key Principles
        - Performance optimization
        - Error handling
        - Testing strategies
        - Deployment best practices
      `,
      date: "2024-11-20",
      readTime: "12 min read",
      tags: ["React", "JavaScript", "Web Development"],
      featured: true,
      category: "Development",
      image: "🚀",
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt:
        "Learn how to write code that's not just functional, but beautiful, maintainable, and self-documenting.",
      content: "Full article content here...",
      date: "2024-11-15",
      readTime: "8 min read",
      tags: ["Clean Code", "Best Practices"],
      featured: false,
      category: "Programming",
      image: "✨",
    },
    {
      id: 3,
      title: "Mastering Git Workflows",
      excerpt:
        "A comprehensive guide to Git workflows that will make your team more productive and your codebase more organized.",
      content: "Full article content here...",
      date: "2024-11-10",
      readTime: "10 min read",
      tags: ["Git", "DevOps", "Collaboration"],
      featured: false,
      category: "DevOps",
      image: "🌲",
    },
    {
      id: 4,
      title: "Designing Scalable APIs",
      excerpt:
        "Best practices for building APIs that can grow with your application and handle millions of requests.",
      content: "Full article content here...",
      date: "2024-11-05",
      readTime: "15 min read",
      tags: ["API", "Backend", "Scalability"],
      featured: false,
      category: "Backend",
      image: "🔗",
    },
    {
      id: 5,
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging technologies and trends that will shape the future of web development.",
      content: "Full article content here...",
      date: "2024-10-30",
      readTime: "6 min read",
      tags: ["Future Tech", "Trends", "Innovation"],
      featured: false,
      category: "Technology",
      image: "🔮",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      description:
        "A next-generation e-commerce platform built with React, Node.js, and AI-powered recommendations.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AI/ML"],
      image: "🛍️",
      status: "Live",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/TapanKumarBarik/ecommerce",
      highlights: ["99.9% Uptime", "50K+ Users", "AI Recommendations"],
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard for real-time data visualization with WebSocket integration.",
      tech: ["React", "D3.js", "WebSocket", "Express"],
      image: "📊",
      status: "Live",
      demoUrl: "https://analytics.example.com",
      githubUrl: "https://github.com/TapanKumarBarik/analytics",
      highlights: ["Real-time Updates", "Interactive Charts", "Custom Metrics"],
    },
    {
      id: 3,
      title: "Open Source Design System",
      description:
        "Comprehensive design system with 50+ components, used by 100+ developers.",
      tech: ["React", "Storybook", "TypeScript", "Sass"],
      image: "🎨",
      status: "Open Source",
      demoUrl: "https://design-system.example.com",
      githubUrl: "https://github.com/TapanKumarBarik/design-system",
      highlights: ["100+ Stars", "50+ Components", "TypeScript"],
    },
  ];

  const achievements = [
    {
      title: "GitHub Star Achiever",
      description: "Accumulated 1000+ stars across open source projects",
      year: "2024",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Hackathon Champion",
      description:
        "Won first place in 3 major hackathons with innovative solutions",
      year: "2023",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Open Source Contributor",
      description: "Top contributor to 10+ major open source projects",
      year: "2024",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
    },
    {
      title: "Tech Speaker",
      description: "Spoke at 5+ tech conferences and meetups",
      year: "2024",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA",
      description:
        "Leading development of cutting-edge web applications with modern tech stack.",
      achievements: [
        "Improved application performance by 60%",
        "Led a team of 5 developers",
        "Implemented microservices architecture",
        "Reduced deployment time by 80%",
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Solutions Co.",
      duration: "Jun 2022 - Dec 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Built 10+ responsive web applications",
        "Improved user engagement by 40%",
        "Mentored 3 junior developers",
        "Implemented design system",
      ],
      tech: ["React", "TypeScript", "Sass", "Figma"],
    },
  ];

  const skills = {
    frontend: [
      { name: "React/Next.js", level: 95, icon: <Globe className="w-4 h-4" /> },
      { name: "TypeScript", level: 90, icon: <Code className="w-4 h-4" /> },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: <Sparkles className="w-4 h-4" />,
      },
      { name: "Vue.js", level: 80, icon: <Zap className="w-4 h-4" /> },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: <Server className="w-4 h-4" /> },
      { name: "Python", level: 85, icon: <Code className="w-4 h-4" /> },
      { name: "PostgreSQL", level: 80, icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", level: 75, icon: <Database className="w-4 h-4" /> },
    ],
    tools: [
      { name: "Docker", level: 85, icon: <Rocket className="w-4 h-4" /> },
      { name: "AWS", level: 80, icon: <Globe className="w-4 h-4" /> },
      { name: "Git", level: 95, icon: <Code className="w-4 h-4" /> },
      { name: "Figma", level: 70, icon: <Smartphone className="w-4 h-4" /> },
    ],
  };

  const memories = [
    {
      title: "First Open Source Contribution 🌱",
      description:
        "Made my first meaningful contribution to a major open source project",
      date: "March 2022",
      image: "🌱",
      category: "Milestone",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Hackathon Victory 🏆",
      description: "Won my first hackathon with an AI-powered productivity app",
      date: "July 2023",
      image: "🏆",
      category: "Achievement",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Tech Talk Debut 🎤",
      description: "Gave my first tech talk at a local developer meetup",
      date: "September 2023",
      image: "🎤",
      category: "Speaking",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "1000 GitHub Stars ⭐",
      description: "Reached 1000 stars across all my open source projects",
      date: "February 2024",
      image: "⭐",
      category: "Coding",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  // Sidebar component
  const Sidebar = () => (
    <div className="fixed left-0 top-0 w-80 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
            T
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
          {personalInfo.name}
        </h2>
        <p className="text-green-600 dark:text-green-400 text-center font-medium mb-2">
          {personalInfo.title}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          {personalInfo.subtitle}
        </p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
              activeSection === item.id
                ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105`
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                activeSection === item.id
                  ? "bg-white/20"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              {item.icon}
            </div>
            <span className="font-medium">{item.label}</span>
            {activeSection === item.id && (
              <ChevronRight className="w-4 h-4 ml-auto animate-pulse" />
            )}
          </button>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Quick Stats
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Projects", value: "50+", icon: "🚀" },
            { label: "Commits", value: "2.5K+", icon: "💻" },
            { label: "Stars", value: "1K+", icon: "⭐" },
            { label: "Coffee", value: "∞", icon: "☕" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center"
            >
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-3 justify-center">
          <a
            href={personalInfo.github}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span className="font-medium">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );

  // Main content sections
  const renderHome = () => (
    <div className="space-y-12">
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
        <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-30"></div>

        <div className="relative z-10 text-center">
          <div className="inline-block animate-bounce mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              T
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <p className="text-2xl mb-2 text-green-300">{personalInfo.title}</p>
          <p className="text-xl mb-8 text-purple-300">
            {personalInfo.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Explore My Work
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Featured Projects */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          ✨ Featured Projects
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-green-100 to-purple-100 dark:from-green-900/30 dark:to-purple-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-purple-600 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          🚀 Skills & Expertise
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-purple-500 rounded-lg flex items-center justify-center">
                  {category === "frontend" && (
                    <Globe className="w-4 h-4 text-white" />
                  )}
                  {category === "backend" && (
                    <Server className="w-4 h-4 text-white" />
                  )}
                  {category === "tools" && (
                    <Rocket className="w-4 h-4 text-white" />
                  )}
                </div>
                {category}
              </h3>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-gray-900 dark:text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my creative work, innovative solutions, and technical
          expertise across various domains.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-purple-400/5 group-hover:from-green-400/10 group-hover:to-purple-400/10 transition-all"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{project.image}</div>
                <div className="flex gap-2">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {highlight}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BlogSection = () => {
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

    if (selectedPost) {
      return (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
          >
            ← Back to Blog
          </button>

          <article className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="text-6xl text-center mb-6">
              {selectedPost.image}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                {selectedPost.category}
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedPost.content}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
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
            </div>
          </article>
        </div>
      );
    }

    return (
      <div className="space-y-8">
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
          <div className="bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 rounded-3xl p-8 mb-8">
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
                    {filteredPosts.find((post) => post.featured).date}
                  </span>
                  <span>•</span>
                  <span>
                    {filteredPosts.find((post) => post.featured).readTime}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setSelectedPost(filteredPosts.find((post) => post.featured))
                  }
                  className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Read Article
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center">
                <div className="text-9xl">
                  {filteredPosts.find((post) => post.featured).image}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
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
            { label: "Total Reads", value: "50K+", icon: "👁️" },
            { label: "Categories", value: categories.length - 1, icon: "📚" },
            { label: "Reader Rating", value: "4.9/5", icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-purple-50 dark:from-green-900/20 dark:to-purple-900/20 rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderExperience = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 My Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A timeline of my professional adventures, learnings, and the amazing
          teams I've worked with.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-purple-500 rounded-full"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-8 mb-12">
            {/* Timeline dot */}
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <Briefcase className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🏆 Achievements
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Milestones, recognitions, and accomplishments that mark my journey in
          technology and beyond.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <span
                    className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-bold text-lg`}
                  >
                    {achievement.year}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Stats */}
      <div className="bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 rounded-3xl p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          By the Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Awards Won", value: "15+", icon: "🏆" },
            { label: "Certifications", value: "8", icon: "📜" },
            { label: "Speaking Events", value: "12+", icon: "🎤" },
            { label: "Years Experience", value: "5+", icon: "💼" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMemories = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          💫 Cherished Memories
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Special moments, milestones, and experiences that have shaped my
          journey as a developer and person.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
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

              <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{memory.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Memory timeline stats */}
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8">
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
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🎯 Let's Connect
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to collaborate, discuss new opportunities, or just chat about
          tech? I'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Your awesome name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all resize-none"
                placeholder="Tell me about your amazing project idea..."
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Follow My Journey
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all group"
              >
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  GitHub
                </span>
              </a>
              <a
                href={personalInfo.linkedin}
                className="flex items-center gap-3 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Available for Work
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Currently open to new opportunities and exciting projects. Let's
              build something amazing together!
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "experience":
        return renderExperience();
      case "projects":
        return renderProjects(); // Assuming renderProjects is a function defined elsewhere
      case "blog":
        return <BlogSection />;
      case "achievements":
        return renderAchievements();
      case "memories":
        return renderMemories();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-80 min-h-screen">
        {/* Header with floating effect */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {navItems.find((item) => item.id === activeSection)?.label ||
                    "Home"}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Welcome to my digital space ✨
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-8 py-8">{renderSection()}</div>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 mt-16">
          <div className="px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Building the future, one line of code at a time. ✨
                </p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {navItems.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Latest Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Published new blog post
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Updated portfolio design
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Contributed to open source
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  © 2024 {personalInfo.name}. Crafted with React & ❤️
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                  Last updated: November 2024
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setActiveSection("contact")}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full shadow-2xl text-white hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center"
        >
          <Mail className="w-6 h-6" />
        </button>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
      </div>
    </div>
  );
};

export default Portfolio;
