// ============================================================
// PORTFOLIO DATA — Anshu Giri
// Single source of truth for all portfolio content
// ============================================================

export const personalInfo = {
  name: "Anshu Giri",
  shortName: "AG",
  title: "Aspiring Data Scientist",
  roles: [
    "Data Scientist",
    "ML Enthusiast",
    "AI Learner",
    "Data Analyst",
    "Problem Solver",
  ],
  tagline: "Turning Data Into Decisions.",
  summary:
    "B.Tech AI & Data Science student passionate about transforming raw data into actionable insights through machine learning, analytics, and intelligent systems.",
  location: "Jaipur, Rajasthan",
  email: "Anshugiri.work4@gmail.com",
  linkedin: "https://www.linkedin.com/in/anshugiri007/",
  github: "https://github.com/anshugiri007/",
  availableFor: "Data Science, AI/ML & Analytics opportunities",
};

export const stats = [
  { value: 3, suffix: "+", label: "Projects" },
  { value: 1, suffix: "", label: "Internship" },
  { value: 1, suffix: "+", label: "Certification" },
  { value: 8.32, suffix: "", label: "CGPA", decimals: 2 },
];

export const skills = [
  // Programming
  { name: "Python", category: "Programming", level: 88 },
  { name: "SQL", category: "Programming", level: 82 },
  { name: "PHP", category: "Programming", level: 65 },
  { name: "HTML & CSS", category: "Programming", level: 75 },
  { name: "JavaScript", category: "Programming", level: 60 },

  // Machine Learning
  { name: "Scikit-Learn", category: "Machine Learning", level: 80 },
  { name: "Feature Engineering", category: "Machine Learning", level: 75 },
  { name: "Data Preprocessing", category: "Machine Learning", level: 82 },

  // Data Analysis
  { name: "Pandas", category: "Data Analysis", level: 85 },
  { name: "NumPy", category: "Data Analysis", level: 83 },
  { name: "EDA", category: "Data Analysis", level: 80 },
  { name: "Statistical Analysis", category: "Data Analysis", level: 75 },

  // Visualization
  { name: "Power BI", category: "Visualization", level: 78 },
  { name: "Tableau", category: "Visualization", level: 65 },
  { name: "Matplotlib", category: "Visualization", level: 80 },
  { name: "Seaborn", category: "Visualization", level: 78 },

  // Databases
  { name: "MySQL", category: "Databases", level: 80 },
  { name: "Database Design", category: "Databases", level: 72 },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 75 },
  { name: "VS Code", category: "Tools", level: 90 },
  { name: "Jupyter", category: "Tools", level: 88 },
  { name: "Google Colab", category: "Tools", level: 85 },
  { name: "Excel", category: "Tools", level: 78 },

  // Soft Skills
  { name: "Leadership", category: "Soft Skills", level: 80 },
  { name: "Communication", category: "Soft Skills", level: 85 },
  { name: "Analytical Thinking", category: "Soft Skills", level: 88 },
  { name: "Adaptability", category: "Soft Skills", level: 85 },
];

export const skillCategories = [
  "Programming",
  "Machine Learning",
  "Data Analysis",
  "Visualization",
  "Databases",
  "Tools",
  "Soft Skills",
];

export const projects = [
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    category: "ML · Predictive Analytics",
    description:
      "End-to-end machine learning pipeline to predict customer churn using ensemble methods. Performed comprehensive EDA on 10,000+ customer records and generated actionable business recommendations to reduce churn rate.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Seaborn", "Logistic Regression", "Random Forest"],
    highlights: [
      "87% model accuracy",
      "10,000+ customer records analyzed",
      "Logistic Regression & Random Forest",
      "Comprehensive EDA",
      "Business recommendations report",
    ],
    github: "https://github.com/anshugiri007/",
    demo: null,
    color: "cyan",
  },
  {
    id: "sales-dashboard",
    title: "Sales Performance Dashboard",
    category: "BI · Data Visualization",
    description:
      "Interactive Power BI dashboard for comprehensive sales analysis with MySQL backend. Implemented DAX measures for KPI tracking, regional revenue analysis, and automated Power Query data pipelines.",
    tech: ["Power BI", "MySQL", "Excel", "DAX", "Power Query"],
    highlights: [
      "Revenue tracking & forecasting",
      "Regional performance analysis",
      "Custom DAX measures",
      "KPI scorecards",
      "Automated Power Query pipeline",
    ],
    github: "https://github.com/anshugiri007/",
    demo: null,
    color: "purple",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Engine",
    category: "NLP · Text Analytics",
    description:
      "NLP-powered sentiment classification system analyzing 5,000+ customer reviews. Built TF-IDF feature extraction with Naive Bayes classification. Includes word cloud visualizations and sentiment distribution analysis.",
    tech: ["Python", "NLTK", "Scikit-Learn", "Matplotlib", "TF-IDF", "Naive Bayes"],
    highlights: [
      "82% classification accuracy",
      "5,000+ reviews analyzed",
      "TF-IDF feature extraction",
      "Naive Bayes classifier",
      "Word cloud visualizations",
    ],
    github: "https://github.com/anshugiri007/",
    demo: null,
    color: "green",
  },
];

export const experience = [
  {
    id: "webentix",
    role: "Web Developer Intern",
    company: "Webentix",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Contributed to backend web development for an eMitra portal, handling full-stack integration from database to UI.",
    responsibilities: [
      "eMitra portal deployment and configuration",
      "XAMPP server setup and environment configuration",
      "PHP-MySQL backend integration and optimization",
      "SQL query optimization for improved performance",
      "Backend module linking and API integration",
      "Technical documentation and code review",
    ],
    tech: ["PHP", "MySQL", "XAMPP", "SQL", "HTML", "CSS"],
  },
];

export const education = [
  {
    id: "vgu",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Vivekananda Global University",
    period: "2023 – 2027",
    cgpa: "8.32",
    location: "Jaipur, Rajasthan",
    coursework: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Statistics & Probability",
      "Big Data Analytics",
      "Python Programming",
    ],
    activities: [
      "Technical Committee Member",
      "Digifest Global Hackathon Contributor",
    ],
  },
];

export const certifications = [
  {
    id: "ai-essentials",
    title: "Artificial Intelligence Essentials",
    issuer: "EXIN BCS",
    year: "2024",
    topics: [
      "AI Fundamentals",
      "Machine Learning Concepts",
      "Data Ethics",
      "Real World Applications",
    ],
    badge: "🎓",
  },
];

export const achievements = [
  {
    id: "hackathon",
    title: "College Hackathon Participant",
    description: "Competed in college-level hackathon, applying ML and data skills to solve real-world challenges.",
    icon: "🏆",
  },
  {
    id: "digifest",
    title: "Digifest Global Hackathon",
    description: "Volunteer Organizer for Digifest Global Hackathon, coordinating technical events and participant experience.",
    icon: "🌐",
  },
];

export const learningRoadmap = [
  {
    name: "TensorFlow",
    status: "in-progress",
    description: "Deep learning framework for building production ML models",
    progress: 35,
  },
  {
    name: "Keras",
    status: "in-progress",
    description: "High-level neural network API for rapid prototyping",
    progress: 30,
  },
  {
    name: "Kaggle Competitions",
    status: "active",
    description: "Competitive data science to sharpen real-world ML skills",
    progress: 45,
  },
  {
    name: "Docker for ML",
    status: "planned",
    description: "Containerization for reproducible machine learning environments",
    progress: 15,
  },
  {
    name: "Streamlit",
    status: "planned",
    description: "Building interactive ML dashboards and demo applications",
    progress: 20,
  },
];
