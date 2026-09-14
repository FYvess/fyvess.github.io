/**
 * Static content data for the portfolio
 * Centralized data source for all portfolio content
 */

import type {
  SiteMetadata,
  SocialLink,
  Skill,
  Stat,
  Project,
  Certificate,
  TechStackItem,
  MarqueeItem,
} from '../types';

// ============================================================================
// Site Metadata
// ============================================================================

export const siteMetadata: SiteMetadata = {
  name: 'Franco Yves De Santos',
  title: 'Franco Yves De Santos - Data & AI Engineer | Portfolio',
  description:
    'AI Specialist and Computer Engineering graduate building data pipelines, AI-enabled systems, analytics workflows, and software solutions. Experienced in Python, SQL, PostgreSQL, Oracle, ETL, unstructured data processing, and AI applications. Based in Cavite, Philippines.',
  location: 'Cavite, Philippines',
  email: 'yvesdesantos@outlook.com',
  phone: '+63 961 158 8400',
  keywords: [
    'data engineer',
    'AI engineer',
    'AI specialist',
    'data engineering',
    'ETL',
    'ELT',
    'Python',
    'SQL',
    'PostgreSQL',
    'Oracle',
    'MSSQL',
    'machine learning',
    'Generative AI',
    'RAG',
    'semiconductor',
    'Cavite Philippines',
    'portfolio',
  ],
  ogImage: '/assets/img/og-image.jpg',
};

// ============================================================================
// Social Links
// ============================================================================

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/FYvess',
    icon: 'github-logo',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fyvess/',
    icon: 'linkedin-logo',
  },
  {
    platform: 'Discord',
    url: 'https://discordapp.com/users/640103641088393216',
    icon: 'discord-logo',
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/francoyves.desantos.33/',
    icon: 'facebook-logo',
  },
];

// ============================================================================
// Skills
// ============================================================================

export const skills: Skill[] = [
  { name: 'Python', icon: 'file' },
  { name: 'SQL', icon: 'database' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Oracle', icon: 'database' },
  { name: 'ETL / Data Pipelines', icon: 'flow' },
  { name: 'Generative AI', icon: 'robot' },
  { name: 'RAG', icon: 'chat-circle' },
  { name: 'Flask', icon: 'server' },
  { name: 'React', icon: 'react' },
  { name: 'Docker', icon: 'docker' },
];

// ============================================================================
// Statistics
// ============================================================================

export const stats: Stat[] = [
  { label: 'Projects Built', value: 7, suffix: '' },
  { label: 'Certificates Earned', value: 5, suffix: '' },
  { label: 'Professional Experience', value: 1, suffix: '' },
];

// ============================================================================
// Projects
// ============================================================================

export const projects: Project[] = [
  {
    id: 'portfolio-latest',
    title: 'This Portfolio',
    description:
      'My current portfolio built with React, TypeScript, and modern web technologies featuring glassmorphism design, dark theme, and smooth scroll animations.',
    image: '/assets/projects/portfolio.png',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    liveLink: 'https://francoyves.github.io',
    githubLink: 'https://github.com/FYvess/fyvess.github.io',
  },
  {
    id: 'thesis-project',
    title: 'Thesis Prototype: Egg Sorter',
    description:
      'Flask, Tkinter, and OpenCV-based Egg Sorter with GUI, designed to automate egg sorting using image processing and machine learning techniques.',
    image: '/assets/projects/thesis.png',
    technologies: ['Python', 'Flask', 'OpenCV', 'Tkinter', 'Machine Learning'],
    githubLink: 'https://github.com/FYvess/THESIS-EGGSORTER',
  },
  {
    id: 'resume-card',
    title: 'ResumeCard - Client Project',
    description:
      'First freelance client project: a portfolio with integrated ChatBot built with HTML, CSS, and JavaScript to showcase professional presence.',
    image: '/assets/projects/resumecard.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ChatBot'],
    githubLink: 'https://github.com/FYvess/BusinessCard-Portfolio',
  },
  {
    id: 'todo-list',
    title: 'To-do List App',
    description:
      'Developed during Express.js study, this grocery list application with cost computation. Originally built with EJS and Express.js, converted to static HTML using AI.',
    image: '/assets/projects/todolist.png',
    technologies: ['EJS', 'Express.js', 'Node.js', 'HTML5'],
    liveLink: 'https://fyvess.github.io/TODO-LIST/',
    githubLink: 'https://github.com/FYvess/TODO-LIST',
  },
  {
    id: 'blog-site',
    title: 'BlogSite',
    description:
      'Desktop-inspired web application that lets you showcase your personal brand, blending creativity and technology with clean, modern design.',
    image: '/assets/projects/blogsite.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/FYvess/BLOGSITEv2-static',
  },
  {
    id: 'time-motion',
    title: 'Time & Motion Study App',
    description:
      'Mobile app developed during internship that increases productivity by turning traditional data collection into a tap-and-go experience for field teams.',
    image: '/assets/projects/timeandmotion.png',
    technologies: ['Java', 'Kotlin', 'Android Studio'],
    githubLink: 'https://github.com/FYvess/TMSCApp',
  },
  {
    id: 'simon-game',
    title: 'Simon Game',
    description:
      'Classic Simon Says game implementation with progressive difficulty levels, visual feedback, and score tracking for interactive learning.',
    image: '/assets/projects/simongame.png',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
    githubLink: 'https://github.com/FYvess/simon-game',
  },
];

// ============================================================================
// Certificates
// ============================================================================

export const certificates: Certificate[] = [
  {
    id: 'cert-database',
    title: 'IT Specialist - Databases',
    issuer: 'Certiport',
    date: '2024',
    image: '/assets/cert/cert_img/CERTIPORT_DATABASE-1.png',
  },
  {
    id: 'cert-python',
    title: 'Python Essentials 1',
    issuer: 'Python Institute',
    date: '2025',
    image: '/assets/cert/cert_img/PythonEssentials1Update20250207-28-jh1c5j-1.png',
  },
  {
    id: 'cert-ai-bootcamp',
    title: '30 Projects in 30 Days AI Development Bootcamp',
    issuer: 'Tech Education Platform',
    date: '2024',
    image: '/assets/cert/cert_img/ai-bootcamp.jpg',
  },
  {
    id: 'cert-devsecops',
    title: 'DevSecOps Certification',
    issuer: 'DevOps Institute',
    date: '2024',
    image: '/assets/cert/cert_img/devsecops.jpg',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Bootcamp',
    issuer: 'Security Academy',
    date: '2024',
    image: '/assets/cert/cert_img/cybersecurity.jpg',
  },
];

// ============================================================================
// Tech Stack
// ============================================================================

export const techStack: TechStackItem[] = [
  // Data Engineering
  { name: 'Python', category: 'Data Engineering', icon: 'file' },
  { name: 'SQL', category: 'Data Engineering', icon: 'database' },
  { name: 'PostgreSQL', category: 'Data Engineering', icon: 'database' },
  { name: 'Oracle', category: 'Data Engineering', icon: 'database' },
  { name: 'MS SQL Server', category: 'Data Engineering', icon: 'database' },
  { name: 'ETL / ELT', category: 'Data Engineering', icon: 'flow' },

  // AI / ML
  { name: 'Generative AI', category: 'AI / ML', icon: 'robot' },
  { name: 'RAG', category: 'AI / ML', icon: 'chat-circle' },
  { name: 'OpenCV', category: 'AI / ML', icon: 'image' },
  { name: 'Machine Learning', category: 'AI / ML', icon: 'brain' },
  { name: 'YOLO', category: 'AI / ML', icon: 'image' },

  // Backend
  { name: 'Flask', category: 'Backend', icon: 'server' },
  { name: 'Node.js', category: 'Backend', icon: 'node' },
  { name: 'Express.js', category: 'Backend', icon: 'server' },
  { name: 'REST API', category: 'Backend', icon: 'link' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'TypeScript', category: 'Frontend', icon: 'file-ts' },
  { name: 'JavaScript', category: 'Frontend', icon: 'file-js' },
  { name: 'HTML5', category: 'Frontend', icon: 'file-html' },
  { name: 'CSS3', category: 'Frontend', icon: 'palette' },

  // Software
  { name: 'Java', category: 'Software', icon: 'file' },
  { name: 'Kotlin', category: 'Software', icon: 'file' },
  { name: 'C++', category: 'Software', icon: 'file' },
  { name: 'C#', category: 'Software', icon: 'file' },

  // DevOps & Tools
  { name: 'Git', category: 'Tools', icon: 'git-branch' },
  { name: 'GitHub', category: 'Tools', icon: 'github-logo' },
  { name: 'Docker', category: 'DevOps', icon: 'docker' },
  { name: 'AWS', category: 'Cloud', icon: 'cloud' },
  { name: 'Bash', category: 'Tools', icon: 'terminal' },
];

// ============================================================================
// Marquee Tools
// ============================================================================

export const marqueeTools: MarqueeItem[] = [
  { name: 'Python', icon: 'file' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Oracle', icon: 'database' },
  { name: 'SQL', icon: 'database' },
  { name: 'React', icon: 'react' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git-branch' },
  { name: 'Claude', icon: 'robot' },
  { name: 'ChatGPT', icon: 'chat-circle' },
  { name: 'GitHub Copilot', icon: 'copilot' },
];