export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Navigation Types
export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  PROGRAMS = '/programs',
  GET_INVOLVED = '/get-involved',
  STORIES = '/stories',
  GALLERY = '/gallery',
  CONTACT = '/contact',
  ADMIN_PLAN = '/admin-plan' // Special page for the "Plan" deliverables
}