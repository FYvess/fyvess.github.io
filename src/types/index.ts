/**
 * TypeScript interfaces and type definitions for the portfolio application
 * All types are strict with no implicit any
 */

// ============================================================================
// Project & Portfolio Types
// ============================================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ============================================================================
// Site Metadata & Content
// ============================================================================

export interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  keywords: string[];
  ogImage: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface MarqueeItem {
  name: string;
  icon: string;
}

// ============================================================================
// Chatbot Types
// ============================================================================

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatRequest {
  messages: Message[];
}

export interface ChatResponse {
  reply: string;
}

export interface ChatErrorResponse {
  error: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

// ============================================================================
// Theme & Context Types
// ============================================================================

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export interface MusicContextValue {
  isPlaying: boolean;
  toggleMusic: () => void;
}
