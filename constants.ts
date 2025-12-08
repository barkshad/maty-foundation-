import { Program, Story, TeamMember } from './types';

export const CONTACT_INFO = {
  email: "hello@matifoundation.org",
  displayPhone: "0712 146 179",
  rawPhone: "254712146179", // Sanitized with country code (Kenya) for tel: and wa.me links
  address: "123 Hope Lane, Springfield"
};

// This context is fed to Gemini
export const SITE_CONTENT_CONTEXT = {
  mission: "To provide a safe haven, holistic education, and community integration for orphaned and vulnerable children.",
  vision: "A world where every child has the foundation to build their own future.",
  history: "Founded in 2010 by Matilda Kashindo, starting with a small 3-bedroom house and 5 children.",
  stats: {
    childrenSupported: 150,
    graduates: 45,
    mealsServed: "50,000+",
    volunteers: 200
  },
  programs: [
    "Residential Care: 24/7 care for 50 children.",
    "Education Scholarship: Funding tuition for 100 community children.",
    "Community Outreach: Monthly health camps and food drives."
  ],
  contact: {
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.displayPhone,
    address: CONTACT_INFO.address
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'edu',
    title: 'Education Program',
    description: 'We believe education is the key to breaking the cycle of poverty. Our program provides tuition, uniforms, books, and after-school tutoring for both residents and vulnerable children in the surrounding community.',
    image: 'https://picsum.photos/id/10/800/600',
    stats: [
      { label: 'Students Sponsored', value: '120' },
      { label: 'Graduation Rate', value: '98%' }
    ]
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    description: 'The Mati Foundation extends its arms beyond our walls. We host monthly medical camps, nutrition workshops, and vocational training for single mothers in the neighborhood.',
    image: 'https://picsum.photos/id/12/800/600',
    stats: [
      { label: 'Families Helped', value: '450' },
      { label: 'Medical Camps', value: '12/yr' }
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'From Survival to Success: David’s Journey',
    excerpt: 'David came to Mati Foundation at age 6. Today, he is graduating with a degree in Civil Engineering.',
    author: 'Matilda Kashindo',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/id/1012/600/400',
    content: "David's story represents the heart of our mission..."
  },
  {
    id: '2',
    title: 'A New Library for the Community',
    excerpt: 'Thanks to our generous donors, we opened a publicly accessible library this weekend.',
    author: 'Admin',
    date: 'Sep 28, 2023',
    image: 'https://picsum.photos/id/1073/600/400',
    content: "Books have the power to transport us..."
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Matilda Kashindo",
    role: "Founder & Director",
    bio: "Former educator with 20 years of experience in child development.",
    image: "https://picsum.photos/id/64/300/300"
  },
  {
    name: "Dr. James Ochieng",
    role: "Head of Health",
    bio: "Pediatrician dedicated to community health initiatives.",
    image: "https://picsum.photos/id/91/300/300"
  },
  {
    name: "Elena Rodriguez",
    role: "Education Coordinator",
    bio: "Ensures every child's academic needs are met with personalized plans.",
    image: "https://picsum.photos/id/338/300/300"
  }
];