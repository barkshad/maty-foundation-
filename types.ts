
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

export interface StudentProfile {
  id: string;
  firstName: string;
  age: number;
  gender: 'Male' | 'Female';
  image: string;
  dream: string;
  bio: string;
  sponsorshipNeeded: string[];
}

// Navigation Types
export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  PROGRAMS = '/programs',
  SPONSORSHIP = '/sponsorship',
  GET_INVOLVED = '/get-involved',
  STORIES = '/stories',
  GALLERY = '/gallery',
  CONTACT = '/contact',
  SOCIALS = '/socials',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/dashboard',
}

export interface GalleryItem {
  id: number;
  cat: 'all' | 'edu' | 'community' | 'welfare';
  url: string;
  caption: string;
}

export interface ContentState {
  hero: {
    headline: string;
    subheadline: string;
    image: string;
  };
  impactStats: { label: string; value: number; suffix: string; icon: string }[];
  programs: Program[];
  stories: Story[];
  gallery: GalleryItem[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: { name: string; url: string; icon: string; desc: string; image: string }[];
}