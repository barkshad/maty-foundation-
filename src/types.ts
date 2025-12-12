

// Existing types
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

export interface GalleryItem {
  id: number;
  cat: 'all' | 'edu' | 'community' | 'welfare';
  url: string;
  caption: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  desc: string;
  image: string;
}

// Consolidating existing content into the new CMS State structure
export interface WebsiteState {
  company: {
    name: string;
    email: string;
    phone: string;
    rawPhone: string;
    address: string;
    social: SocialLink[];
    bankDetails: any;
  };
  hero: {
    headline: string;
    subheadline: string;
    image: string;
  };
  impactStats: {
    label: string;
    value: number;
    suffix: string;
    icon: string;
  }[];
  programs: Program[];
  stories: Story[];
  gallery: GalleryItem[];
  team: TeamMember[];
  students: StudentProfile[];
  maintenanceMode: boolean;
  lastUpdated?: any;
}

// Types for the Admin System
export interface AuditLog {
  id?: string;
  action: string;
  adminEmail: string;
  timestamp: any;
  details?: string;
}

export interface AdminUser {
  uid: string;
  email: string | null;
  role: 'admin' | 'editor';
}

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
  PRODUCTS = '/products', 
}