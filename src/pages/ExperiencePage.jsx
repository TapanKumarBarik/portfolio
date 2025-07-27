// pages/ExperiencePage.jsx
import React, { useState } from "react";
import {
  Briefcase,
  Star,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Target,
  Code,
  Lightbulb,
  Rocket,
  Building,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
} from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card, Button } from "../components/common";
import { TimelineItem } from "../components/ui/TimelineItem";

const ExperiencePage = () => {
  const { experience } = usePortfolio();
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const filters = [
    {
      id: "all",
      label: "All Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "Full-time",
      label: "Full-time",
      icon: <Building className="w-4 h-4" />,
    },
    { id: "Contract", label: "Contract", icon: <Clock className="w-4 h-4" /> },
  ];

  const filteredExperience =
    activeFilter === "all"
      ? experience
      : experience.filter((exp) => exp.type === activeFilter);

  const skillsEvolution = [
    {
      period: "2023 - Present",
      level: "Senior Level",
      skills: [
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "Kubernetes",
        "TypeScript",
        "GraphQL",
      ],
      focus: "Leadership & Architecture",
      color: "from-green-500 to-emerald-600",
    },
    {
      period: "2022 - 2023",
      level: "Mid Level",
      skills: [
        "React",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      focus: "Full-Stack Development",
      color: "from-blue-500 to-indigo-600",
    },
    {
      period: "2021 - 2022",
      level: "Junior Level",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
      focus: "Frontend & Backend Basics",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const careerStats = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      count: experience.length,
      label: "Positions",
      description: "Professional roles",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      count: "15+",
      label: "Team Members",
      description: "People I've worked with",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      count: "60%",
      label: "Performance Boost",
      description: "Average improvement delivered",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      count: experience.reduce((sum, exp) => sum + exp.achievements.length, 0),
      label: "Key Achievements",
      description: "Major accomplishments",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      count: "10+",
      label: "Technologies",
      description: "Tech stack mastered",
      color: "from-cyan-400 to-teal-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      count: "3",
      label: "Promotions",
      description: "Career advancement",
      color: "from-rose-400 to-red-500",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Senior Developer Promotion",
      description: "Promoted to Senior Full Stack Developer role",
      icon: <Award className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2023",
      title: "Team Leadership",
      description: "Started leading a team of 5 developers",
      icon: <Users className="w-5 h-5" />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      year: "2022",
      title: "Full-Stack Transition",
      description: "Transitioned from frontend to full-stack development",
      icon: <Code className="w-5 h-5" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "2021",
      title: "Career Start",
      description: "Started professional development career",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl mb-6">
          <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My Professional Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A timeline of my career growth, the amazing teams I've worked with,
          and the impact I've made along the way.
        </p>
      </div>

      {/* Career Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
        {careerStats.map((stat, index) => (
          <Card
            key={index}
            className="p-6 text-center group hover:scale-105 transition-transform"
            hover={true}
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.count}
            </div>
            <div className="text-gray-900 dark:text-white font-medium text-sm mb-1">
              {stat.label}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs">
              {stat.description}
            </div>
          </Card>
        ))}
      </div>

      {/* Experience Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
            }`}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>

        {filteredExperience.map((exp, index) => (
          <div key={exp.id} className="relative flex gap-8 mb-12">
            {/* Timeline dot */}
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <Briefcase className="w-8 h-8 text-white" />
            </div>

            {/* Experience Card */}
            <Card className="flex-1 p-8 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === "Full-time"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.highlights?.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Team of {exp.highlights.teamSize}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="text-gray-500 dark:text-gray-400 text-sm px-3 py-1">
                      +{exp.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Highlights */}
              {exp.highlights && (
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(exp.highlights).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
                    >
                      <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements Toggle */}
              <div>
                <button
                  onClick={() => toggleExpanded(exp.id)}
                  className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-gray-900 dark:text-white">
                      Key Achievements ({exp.achievements.length})
                    </span>
                  </div>
                  {expandedExperience === exp.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Expanded Achievements */}
                {expandedExperience === exp.id && (
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* All Technologies Used */}
                {expandedExperience === exp.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Skills Evolution */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-500" />
          Skills Evolution Timeline
        </h2>

        <div className="space-y-6">
          {skillsEvolution.map((period, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-6 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${period.color} rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {period.period.split(" - ")[0].slice(-2)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {period.period}
                    </h3>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${period.color} text-white rounded-full text-sm font-semibold`}
                    >
                      {period.level}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Focus: {period.focus}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {period.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < skillsEvolution.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Career Milestones */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
          <Target className="w-8 h-8 text-purple-500" />
          Career Milestones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
              >
                {milestone.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {milestone.year}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {milestone.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 text-center bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm passionate about solving complex problems and building amazing
          products. Ready to bring my experience to your next project?
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            icon={<ExternalLink className="w-5 h-5" />}
            onClick={() =>
              (window.location.href =
                "mailto:tapankumarbarik7@gmail.com?subject=Let's Work Together&body=Hi Tapan, I'd like to discuss...")
            }
            className="bg-gradient-to-r from-green-500 to-blue-600"
          >
            Get In Touch
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={<Download className="w-5 h-5" />}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "#";
              link.download = "Tapan_Resume.pdf";
              link.click();
            }}
          >
            Download Resume
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ExperiencePage;
