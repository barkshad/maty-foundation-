

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

// FIX: Add missing ContentState and SocialLink interfaces used by ContentContext
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  desc: string;
  image: string;
}

export interface ContentState {
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
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: SocialLink[];
}

// New types for Hybrid CMS
export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  social: { facebook: string; instagram: string; whatsapp: string };
  animationsEnabled: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  gallery: string[]; // URLs from Cloudinary
  description: string;
  featured: boolean;
  category: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string; // Markdown support
  image: string;
  date: string;
}

// Main state for the entire website
export interface WebsiteState {
  company: CompanyInfo;
  pages: {
    home: {
      hero: {
        headline: string;
        subheadline: string;
        image: string;
      };
      impactStats: { label: string; value: number; suffix: string; icon: string }[];
    },
    [key: string]: any; // for other pages
  };
  programs: Program[];
  stories: Story[];
  gallery: GalleryItem[];
  products: Product[];
  blog: BlogPost[];
  maintenanceMode?: boolean;
}


// Navigation Types (remains the same)
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
  PRODUCTS = '/products', // New route for products
}
