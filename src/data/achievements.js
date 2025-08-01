// data/achievements.js
export const achievements = [
  // Awards & Recognition
  {
    id: 1,
    title: "GitHub Star Achiever",
    description: "Accumulated 1000+ stars across open source projects",
    year: "2024",
    category: "Awards",
    type: "achievement",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
    metrics: {
      stars: "1000+",
      projects: "15+",
      contributors: "50+",
    },
    credentialId: null,
    issuer: "GitHub Community",
    verificationUrl: "https://github.com/tapan",
  },
  {
    id: 2,
    title: "Hackathon Champion",
    description:
      "Won first place in 3 major hackathons with innovative solutions",
    year: "2023",
    category: "Awards",
    type: "achievement",
    icon: "🏆",
    color: "from-purple-400 to-pink-500",
    metrics: {
      wins: "3",
      participants: "500+",
      prize: "$15,000",
    },
    credentialId: null,
    issuer: "Various Organizations",
    verificationUrl: null,
  },
  {
    id: 3,
    title: "Tech Speaker Award",
    description:
      "Recognized for outstanding technical presentations at conferences",
    year: "2024",
    category: "Awards",
    type: "achievement",
    icon: "🎤",
    color: "from-blue-400 to-indigo-500",
    metrics: {
      talks: "5+",
      audience: "1000+",
      rating: "4.8/5",
    },
    credentialId: null,
    issuer: "Tech Conference Network",
    verificationUrl: null,
  },

  // Professional Certifications
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    description:
      "Professional-level certification for designing distributed systems on AWS",
    year: "2024",
    category: "Cloud Computing",
    type: "certification",
    icon: "☁️",
    color: "from-orange-400 to-red-500",
    metrics: {
      level: "Professional",
      validity: "3 years",
      score: "850/1000",
    },
    credentialId: "AWS-SAP-2024-001",
    issuer: "Amazon Web Services",
    verificationUrl: "https://aws.amazon.com/verification",
    expiryDate: "2027-03-15",
  },
  {
    id: 5,
    title: "Google Cloud Professional Developer",
    description:
      "Expertise in developing scalable applications on Google Cloud Platform",
    year: "2024",
    category: "Cloud Computing",
    type: "certification",
    icon: "🌐",
    color: "from-blue-400 to-cyan-500",
    metrics: {
      level: "Professional",
      validity: "2 years",
      score: "92%",
    },
    credentialId: "GCP-PCD-2024-789",
    issuer: "Google Cloud",
    verificationUrl: "https://cloud.google.com/certification",
    expiryDate: "2026-08-20",
  },
  {
    id: 6,
    title: "Microsoft Azure Developer Associate",
    description: "Developing and implementing Azure solutions and services",
    year: "2023",
    category: "Cloud Computing",
    type: "certification",
    icon: "⚡",
    color: "from-blue-500 to-indigo-600",
    metrics: {
      level: "Associate",
      validity: "2 years",
      score: "820/1000",
    },
    credentialId: "AZ-204-2023-456",
    issuer: "Microsoft",
    verificationUrl: "https://docs.microsoft.com/certifications",
    expiryDate: "2025-11-10",
  },

  // Development Certifications
  {
    id: 7,
    title: "Meta React Developer Professional Certificate",
    description: "Comprehensive React development skills and best practices",
    year: "2023",
    category: "Frontend Development",
    type: "certification",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    metrics: {
      modules: "9",
      duration: "6 months",
      projects: "8",
    },
    credentialId: "META-REACT-2023-123",
    issuer: "Meta (Facebook)",
    verificationUrl: "https://coursera.org/verify",
    expiryDate: null,
  },
  {
    id: 8,
    title: "Node.js Application Developer Certification",
    description: "Advanced Node.js development and application architecture",
    year: "2023",
    category: "Backend Development",
    type: "certification",
    icon: "🟢",
    color: "from-green-500 to-emerald-600",
    metrics: {
      level: "Advanced",
      score: "95%",
      practicalExam: "Passed",
    },
    credentialId: "NODEJS-ADV-2023-789",
    issuer: "OpenJS Foundation",
    verificationUrl: "https://openjsf.org/certification",
    expiryDate: "2026-05-15",
  },
  {
    id: 9,
    title: "Docker Certified Associate",
    description: "Container orchestration and Docker ecosystem expertise",
    year: "2024",
    category: "DevOps",
    type: "certification",
    icon: "🐳",
    color: "from-blue-400 to-blue-600",
    metrics: {
      level: "Associate",
      validity: "2 years",
      score: "88%",
    },
    credentialId: "DOCKER-DCA-2024-321",
    issuer: "Docker Inc.",
    verificationUrl: "https://docker.com/certification",
    expiryDate: "2026-01-30",
  },

  // Security Certifications
  {
    id: 10,
    title: "Certified Ethical Hacker (CEH)",
    description: "Ethical hacking and penetration testing certification",
    year: "2024",
    category: "Cybersecurity",
    type: "certification",
    icon: "🔒",
    color: "from-red-400 to-pink-500",
    metrics: {
      level: "Professional",
      validity: "3 years",
      score: "85%",
    },
    credentialId: "CEH-2024-567",
    issuer: "EC-Council",
    verificationUrl: "https://eccouncil.org/verify",
    expiryDate: "2027-09-12",
  },

  // Database Certifications
  {
    id: 11,
    title: "MongoDB Certified Developer",
    description: "MongoDB database design and development expertise",
    year: "2023",
    category: "Database",
    type: "certification",
    icon: "🍃",
    color: "from-green-600 to-green-800",
    metrics: {
      level: "Associate",
      score: "91%",
      practicalExam: "Passed",
    },
    credentialId: "MONGO-DEV-2023-890",
    issuer: "MongoDB Inc.",
    verificationUrl: "https://university.mongodb.com/certification",
    expiryDate: "2025-12-08",
  },

  // Project Management
  {
    id: 12,
    title: "Certified Scrum Master (CSM)",
    description: "Agile project management and Scrum methodology certification",
    year: "2024",
    category: "Project Management",
    type: "certification",
    icon: "📋",
    color: "from-purple-500 to-indigo-600",
    metrics: {
      level: "Professional",
      validity: "2 years",
      score: "93%",
    },
    credentialId: "CSM-2024-445",
    issuer: "Scrum Alliance",
    verificationUrl: "https://scrumalliance.org/community/profile",
    expiryDate: "2026-04-22",
  },

  // Academic Achievements
  {
    id: 13,
    title: "Dean's List Recognition",
    description:
      "Academic excellence with GPA above 3.8 for consecutive semesters",
    year: "2022",
    category: "Academic",
    type: "achievement",
    icon: "🎓",
    color: "from-indigo-400 to-purple-500",
    metrics: {
      gpa: "3.9/4.0",
      semesters: "6",
      rank: "Top 5%",
    },
    credentialId: null,
    issuer: "University",
    verificationUrl: null,
  },
];

export const achievementCategories = [
  { id: "all", label: "All", icon: "🏆", count: achievements.length },
  {
    id: "Awards",
    label: "Awards",
    icon: "🏆",
    count: achievements.filter((a) => a.category === "Awards").length,
  },
  {
    id: "Cloud Computing",
    label: "Cloud",
    icon: "☁️",
    count: achievements.filter((a) => a.category === "Cloud Computing").length,
  },
  {
    id: "Frontend Development",
    label: "Frontend",
    icon: "⚛️",
    count: achievements.filter((a) => a.category === "Frontend Development")
      .length,
  },
  {
    id: "Backend Development",
    label: "Backend",
    icon: "🟢",
    count: achievements.filter((a) => a.category === "Backend Development")
      .length,
  },
  {
    id: "DevOps",
    label: "DevOps",
    icon: "🐳",
    count: achievements.filter((a) => a.category === "DevOps").length,
  },
  {
    id: "Cybersecurity",
    label: "Security",
    icon: "🔒",
    count: achievements.filter((a) => a.category === "Cybersecurity").length,
  },
  {
    id: "Database",
    label: "Database",
    icon: "🍃",
    count: achievements.filter((a) => a.category === "Database").length,
  },
  {
    id: "Project Management",
    label: "PM",
    icon: "📋",
    count: achievements.filter((a) => a.category === "Project Management")
      .length,
  },
  {
    id: "Academic",
    label: "Academic",
    icon: "🎓",
    count: achievements.filter((a) => a.category === "Academic").length,
  },
];
