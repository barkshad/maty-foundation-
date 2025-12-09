import { Program, Story, TeamMember } from './types';

export const CONTACT_INFO = {
  email: "hello@matifoundation.org",
  displayPhone: "0712 146 179",
  rawPhone: "254712146179", // Sanitized with country code (Kenya) for tel: and wa.me links
  address: "123 Hope Lane, Kilifi, Kenya"
};

// This context is fed to Gemini
export const SITE_CONTENT_CONTEXT = {
  mission: "To uplift vulnerable children and communities by providing access to education, basic needs, and opportunities that promote dignity, resilience, and lasting transformation.",
  vision: "A future where every child has access to education, care, and opportunity—regardless of their background.",
  history: `Mati Foundation is an independent, humanitarian foundation founded by Matilda Kashindo, dedicated to supporting vulnerable children and underserved communities across Africa. It was born from her hands-on experience and recognition of the need for a focused foundation that prioritizes education, child welfare, and sustainable empowerment.`,
  founder_background: "Matilda Kashindo is a passionate humanitarian and community advocate. Through years of involvement in grassroots support initiatives, she recognized the need for an independent foundation to respond directly to the real challenges facing children.",
  programs: [
    "Child Welfare & Care: Supporting orphaned and vulnerable children with essential needs like food, nutrition, clothing, and safe living conditions.",
    "Education Support: Providing school fees assistance, learning materials, and uniforms to keep children in school.",
    "Community Empowerment: Working with parents, caregivers, and local leaders to promote family stability and self-reliance.",
    "Health & Wellbeing: Promoting healthy growth through nutrition awareness and basic health support.",
  ],
  how_to_help: "Support can be given by donating to provide education and care, sponsoring a child's education, volunteering your time, or partnering with us to amplify our impact.",
  contact: {
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.displayPhone,
    address: CONTACT_INFO.address
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'welfare',
    title: 'Child Welfare & Care',
    description: 'We support orphaned and vulnerable children by helping meet essential needs, including food and nutrition, clothing, safe living conditions, and emotional support.',
    image: 'https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1',
    stats: [
      { label: 'Children Supported', value: '200+' },
      { label: 'Meals Provided Monthly', value: '1,500+' }
    ]
  },
  {
    id: 'edu',
    title: 'Education Support',
    description: 'Education is the foundation of long-term change. We provide school fees assistance, learning materials, and uniforms to keep children in school and reduce dropout rates.',
    image: 'https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg',
    stats: [
      { label: 'Scholarships', value: '75+' },
      { label: 'Schools Partnered', value: '12' }
    ]
  },
  {
    id: 'community',
    title: 'Community Empowerment',
    description: 'Working with parents, caregivers, and local leaders, we promote family stability, community-led development, and self-reliance through local support initiatives.',
    image: 'https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png',
    stats: [
      { label: 'Families Engaged', value: '120+' },
      { label: 'Workshops Held', value: '25' }
    ]
  },
  {
    id: 'health',
    title: 'Health & Wellbeing',
    description: 'We promote healthy growth through nutrition awareness, basic health support, and child wellbeing education for families and caregivers.',
    image: 'https://images.unsplash.com/photo-1540499749214-f6f3e8371804?auto=format&fit=crop&q=80&w=800',
    stats: [
      { label: 'Health Checks', value: '300+' },
      { label: 'Hygiene Kits', value: '1000+' }
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'From Textbooks to Dreams: Maria\'s Story',
    excerpt: 'Thanks to our education support program, 14-year-old Maria now has the books and uniform she needs to attend secondary school and pursue her dream of becoming a nurse.',
    author: 'Matilda Kashindo',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    content: "Maria's journey is a testament to what community support can achieve..."
  },
  {
    id: '2',
    title: 'A Community Harvest: Feeding Futures',
    excerpt: 'Our recent community empowerment workshop brought families together to plant a communal garden, ensuring a sustainable source of nutrition for the children.',
    author: 'Community Update',
    date: 'Sep 21, 2023',
    image: 'https://images.unsplash.com/photo-1621473105269-58d04275d22f?auto=format&fit=crop&q=80&w=600',
    content: "By working together, we are building resilience and food security from the ground up..."
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Matilda Kashindo",
    role: "Founder & Director",
    bio: "A passionate humanitarian and community advocate whose years of involvement in grassroots support initiatives inspired the creation of Mati Foundation.",
    image: 'https://www.fordfoundation.org/wp-content/uploads/2025/08/Akina_Mama_wa_Afrika_Hero.jpg?w=1024'
  }
];

export const INSPIRATIONAL_QUOTES = [
    {
        quote: "Education is the most powerful gift we can give a child.",
        image: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=800"
    },
    {
        quote: "Hope begins when someone chooses to care.",
        image: "https://images.unsplash.com/photo-1517594422361-5e3e8a30be48?auto=format&fit=crop&q=80&w=800"
    },
];