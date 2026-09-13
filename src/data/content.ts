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
    'Full-Stack Developer specializing in React, TypeScript, and modern web technologies. Based in Cavite, Philippines.',
  location: 'Cavite, Philippines',
  email: 'franco.desantos@example.com',
  phone: '+63 (XXX) XXX-XXXX',
  keywords: [
    'full-stack developer',
    'react developer',
    'typescript',
    'web developer',
    'cavite philippines',
    'portfolio',
    'frontend development',
    'backend development',
  ],
  ogImage: '/assets/img/og-image.jpg',
};

// ============================================================================
// Social Links
// ============================================================================

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/francoyves',
    icon: 'github-logo',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/francoyves',
    icon: 'linkedin-logo',
  },
  {
    platform: 'Discord',
    url: 'https://discord.com/users/francoyves',
    icon: 'discord-logo',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/francoyves',
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
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Certificates Earned', value: 8 },
  { label: 'Years of Experience', value: 3, suffix: '+' },
];

// ============================================================================
// Projects
// ============================================================================

export const projects: Project[] = [
  {
    id: 'portfolio-latest',
    title: 'Latest Portfolio',
    description:
      'Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark/light theme support.',
    image: '/assets/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    liveLink: 'https://francoyves.github.io',
    githubLink: 'https://github.com/francoyves/portfolio',
  },
  {
    id: 'blog-site',
    title: 'Blog Platform',
    description:
      'Full-stack blog platform with user authentication, article management, and comment system built with React and Node.js.',
    image: '/assets/projects/blogsite.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://blog-platform-demo.vercel.app',
    githubLink: 'https://github.com/francoyves/blog-platform',
  },
  {
    id: 'resume-card',
    title: 'Resume Card Generator',
    description:
      'Interactive tool for creating and previewing resume cards with customizable templates and real-time export to PDF.',
    image: '/assets/projects/resumecard.jpg',
    technologies: ['React', 'TypeScript', 'PDF.js', 'Tailwind CSS'],
    liveLink: 'https://resume-card-generator.vercel.app',
    githubLink: 'https://github.com/francoyves/resume-card-generator',
  },
  {
    id: 'simon-game',
    title: 'Simon Game',
    description:
      'Classic Simon Says game implementation with progressive difficulty levels, visual feedback, and score tracking.',
    image: '/assets/projects/simongame.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
    liveLink: 'https://simon-game-demo.vercel.app',
    githubLink: 'https://github.com/francoyves/simon-game',
  },
  {
    id: 'todo-list',
    title: 'Todo List App',
    description:
      'Feature-rich todo application with task prioritization, due dates, categories, and local storage persistence.',
    image: '/assets/projects/todolist.jpg',
    technologies: ['React', 'Context API', 'Local Storage', 'CSS Modules'],
    liveLink: 'https://todo-list-app-demo.vercel.app',
    githubLink: 'https://github.com/francoyves/todo-list-app',
  },
  {
    id: 'thesis-project',
    title: 'Thesis Project: Performance Analyzer',
    description:
      'Web application for analyzing and visualizing performance metrics with data visualization and real-time updates.',
    image: '/assets/projects/thesis.jpg',
    technologies: ['React', 'Chart.js', 'API Integration', 'Real-time Data'],
    liveLink: 'https://thesis-analyzer-demo.vercel.app',
    githubLink: 'https://github.com/francoyves/thesis-project',
  },
  {
    id: 'time-motion',
    title: 'Time & Motion Study Tool',
    description:
      'Application for conducting time and motion studies with data recording, analysis, and report generation capabilities.',
    image: '/assets/projects/timeandmotion.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Charts'],
    liveLink: 'https://time-motion-study.vercel.app',
    githubLink: 'https://github.com/francoyves/time-motion-tool',
  },
];

// ============================================================================
// Certificates
// ============================================================================

export const certificates: Certificate[] = [
  {
    id: 'cert-ai-bootcamp',
    title: '30 Projects in 30 Days AI Development Bootcamp',
    issuer: 'Tech Education Platform',
    date: 'December 2024',
    image: '/assets/cert/cert_img/ai-bootcamp.jpg',
    credentialUrl: 'https://credentials.tech/ai-bootcamp-2024',
  },
  {
    id: 'cert-devops',
    title: 'DevSecOps Certification',
    issuer: 'DevOps Institute',
    date: 'November 2024',
    image: '/assets/cert/cert_img/devsecops.jpg',
    credentialUrl: 'https://credentials.devops/devsecops-2024',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Bootcamp',
    issuer: 'Security Academy',
    date: 'October 2024',
    image: '/assets/cert/cert_img/cybersecurity.jpg',
    credentialUrl: 'https://credentials.security/cybersecurity-bootcamp',
  },
  {
    id: 'cert-python',
    title: 'Python Essentials 1 - Programming Basics',
    issuer: 'Cisco Networking Academy',
    date: 'September 2024',
    image: '/assets/cert/cert_img/python-essentials.jpg',
    credentialUrl: 'https://credentials.cisco/python-essentials',
  },
  {
    id: 'cert-partyrock',
    title: 'PartyRock by AWS - Generative AI Workshop',
    issuer: 'Amazon Web Services',
    date: 'August 2024',
    image: '/assets/cert/cert_img/partyrock-aws.jpg',
    credentialUrl: 'https://credentials.aws/partyrock-workshop',
  },
  {
    id: 'cert-database',
    title: 'Database Administration Certification',
    issuer: 'CERTIPORT',
    date: 'July 2024',
    image: '/assets/cert/cert_img/database-admin.jpg',
    credentialUrl: 'https://certiport.com/database-admin-2024',
  },
  {
    id: 'cert-udemy-sales',
    title: 'Udemy: Professional Selling Skills',
    issuer: 'Udemy',
    date: 'June 2024',
    image: '/assets/cert/cert_img/udemy-selling.jpg',
    credentialUrl: 'https://udemy.com/certificate/selling-skills-2024',
  },
];

// ============================================================================
// Tech Stack
// ============================================================================

export const techStack: TechStackItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'TypeScript', category: 'Frontend', icon: 'file-ts' },
  { name: 'JavaScript', category: 'Frontend', icon: 'file-js' },
  { name: 'HTML5', category: 'Frontend', icon: 'file-html' },
  { name: 'CSS3', category: 'Frontend', icon: 'palette' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'palette' },
  { name: 'Vite', category: 'Frontend', icon: 'lightning' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'node' },
  { name: 'Express', category: 'Backend', icon: 'server' },
  { name: 'Python', category: 'Backend', icon: 'file' },

  // Databases
  { name: 'PostgreSQL', category: 'Database', icon: 'database' },
  { name: 'MongoDB', category: 'Database', icon: 'database' },
  { name: 'Firebase', category: 'Database', icon: 'database' },

  // Tools & DevOps
  { name: 'Git', category: 'Tools', icon: 'git-branch' },
  { name: 'GitHub', category: 'Tools', icon: 'github-logo' },
  { name: 'Docker', category: 'Tools', icon: 'docker' },
  { name: 'VS Code', category: 'Tools', icon: 'code' },
  { name: 'Vercel', category: 'DevOps', icon: 'rocket' },
  { name: 'AWS', category: 'DevOps', icon: 'cloud' },

  // Testing
  { name: 'Vitest', category: 'Testing', icon: 'check' },
  { name: 'Jest', category: 'Testing', icon: 'check' },
  { name: 'React Testing Library', category: 'Testing', icon: 'check' },
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
