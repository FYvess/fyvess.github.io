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
  title: 'Franco Yves De Santos - Full-Stack Developer | Portfolio',
  description:
    'Recent Computer Engineering graduate from Lyceum of the Philippines University. Full-Stack Developer specializing in web development, systems management, and cybersecurity. Based in Cavite, Philippines.',
  location: 'Cavite, Philippines',
  email: 'yvesdesantos@outlook.com',
  phone: '+63 961 158 8400',
  keywords: [
    'full-stack developer',
    'react developer',
    'typescript',
    'web developer',
    'cavite philippines',
    'portfolio',
    'frontend development',
    'backend development',
    'computer engineering',
    'cybersecurity',
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
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'file-ts' },
  { name: 'JavaScript', icon: 'file-js' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Express', icon: 'express' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'MongoDB', icon: 'database' },
  { name: 'CSS/Sass', icon: 'palette' },
  { name: 'Git', icon: 'git-branch' },
  { name: 'Docker', icon: 'docker' },
];

// ============================================================================
// Statistics
// ============================================================================

export const stats: Stat[] = [
  { label: 'Projects Completed', value: 7, suffix: '' },
  { label: 'Certificates Earned', value: 5, suffix: '' },
  { label: 'Years of Experience', value: 1, suffix: '' },
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
    description: 'Demonstrates foundational knowledge of designing and querying relational databases such as MySQL, Microsoft SQL Server, or Oracle.',
    image: '/assets/cert/cert_img/cert-database.jpg',
  },
  {
    id: 'cert-python',
    title: 'Python Essentials 1',
    issuer: 'Python Institute',
    description: 'Knowledge of computer programming concepts, Python language syntax and semantics, with ability to accomplish coding tasks and resolve implementation challenges using Python Standard Library.',
    image: '/assets/cert/cert_img/cert-python.jpg',
  },
  {
    id: 'cert-ai-bootcamp',
    title: '30 Projects in 30 Days AI Development Bootcamp',
    issuer: 'Tech Education Platform',
    description: 'Skilled in implementing AI development practices and automation tools for efficient backend leveraging AI technologies.',
    image: '/assets/cert/cert_img/ai-bootcamp.jpg',
  },
  {
    id: 'cert-devsecops',
    title: 'DevSecOps Certification',
    issuer: 'DevOps Institute',
    image: '/assets/cert/cert_img/devsecops.jpg',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Bootcamp',
    issuer: 'Security Academy',
    image: '/assets/cert/cert_img/cybersecurity.jpg',
  },
];

// ============================================================================
// Tech Stack
// ============================================================================

export const techStack: TechStackItem[] = [
  // Web Development - Frontend
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'TypeScript', category: 'Frontend', icon: 'file-ts' },
  { name: 'JavaScript', category: 'Frontend', icon: 'file-js' },
  { name: 'HTML5', category: 'Frontend', icon: 'file-html' },
  { name: 'CSS3', category: 'Frontend', icon: 'palette' },
  { name: 'EJS', category: 'Frontend', icon: 'file' },

  // Web Development - Backend
  { name: 'Node.js', category: 'Backend', icon: 'node' },
  { name: 'Express.js', category: 'Backend', icon: 'server' },
  { name: 'Python', category: 'Backend', icon: 'file' },
  { name: 'Flask', category: 'Backend', icon: 'server' },

  // Databases
  { name: 'MySQL', category: 'Database', icon: 'database' },
  { name: 'PostgreSQL', category: 'Database', icon: 'database' },
  { name: 'MongoDB', category: 'Database', icon: 'database' },

  // APIs
  { name: 'REST API', category: 'API', icon: 'link' },
  { name: 'Postman', category: 'API', icon: 'plug' },

  // Software Development
  { name: 'Java', category: 'Software', icon: 'file' },
  { name: 'Kotlin', category: 'Software', icon: 'file' },
  { name: 'C++', category: 'Software', icon: 'file' },
  { name: 'C#', category: 'Software', icon: 'file' },
  { name: 'Android Studio', category: 'Software', icon: 'smartphone' },

  // ML & Computer Vision
  { name: 'OpenCV', category: 'ML', icon: 'image' },
  { name: 'Tkinter', category: 'ML', icon: 'window' },

  // Tools & DevOps
  { name: 'Git', category: 'Tools', icon: 'git-branch' },
  { name: 'GitHub', category: 'Tools', icon: 'github-logo' },
  { name: 'Bootstrap', category: 'Tools', icon: 'grid-four' },
  { name: 'Bash scripting', category: 'Tools', icon: 'terminal' },
  { name: 'Vite', category: 'Tools', icon: 'lightning' },
  { name: 'Docker', category: 'DevOps', icon: 'docker' },
  { name: 'AWS', category: 'DevOps', icon: 'cloud' },
];

// ============================================================================
// Marquee Tools
// ============================================================================

export const marqueeTools: MarqueeItem[] = [
  { name: 'Claude', icon: 'robot' },
  { name: 'ChatGPT', icon: 'chat-circle' },
  { name: 'GitHub Copilot', icon: 'copilot' },
  { name: 'Power Automate', icon: 'flow' },
  { name: 'MS Fabric', icon: 'grid-four' },
  { name: 'VS Code', icon: 'code' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Vercel', icon: 'rocket' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'MongoDB Atlas', icon: 'database' },
];
