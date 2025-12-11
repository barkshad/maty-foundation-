import { Program, Story, TeamMember } from './types';

export const CONTACT_INFO = {
  email: "jomimatilda@gmail.com",
  displayPhone: "0712 146 179",
  rawPhone: "254712146179", // Sanitized with country code (Kenya) for tel: and wa.me links
  address: "Kilifi, Kenya"
};

export const BANK_DETAILS = {
  bankName: "Diamond Trust Bank",
  accountName: "Matilda John Kashindo",
  accountNumber: "0200471001",
  branch: "Kilifi",
  branchCode: "044",
  bankCode: "63",
  swiftCode: "DTKE KENA",
  country: "Kenya"
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
  how_to_help: "Support can be given by donating via bank transfer, donating items, volunteering your time, or partnering with us to amplify our impact.",
  contact: {
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.displayPhone,
    address: CONTACT_INFO.address
  }
};

export const CORE_VALUES = [
    { title: "Compassion", icon: 'Heart', text: "Leading with empathy and care.", image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=800" },
    { title: "Integrity", icon: 'CheckCircle', text: "Operating with honesty and accountability.", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800" },
    { title: "Transparency", icon: 'Sun', text: "Being open with our partners and community.", image: "https://images.unsplash.com/photo-1581092921461-8a283a792751?auto=format&fit=crop&q=80&w=800" },
    { title: "Community", icon: 'Users', text: "Building change through local collaboration.", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800" },
    { title: "Sustainability", icon: 'Handshake', text: "Creating programs for long-term self-reliance.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
];

export const GET_INVOLVED_OPTIONS = {
    itemCategories: [
        { id: 'clothes', label: 'Clothes & Shoes', icon: 'Shirt', desc: 'New or gently used for all ages.', image: 'https://images.unsplash.com/photo-1603252109360-704baaf1365c?auto=format&fit=crop&q=80&w=800' },
        { id: 'books', label: 'School Supplies', icon: 'Book', desc: 'Books, pens, and notebooks.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800' },
        { id: 'hygiene', label: 'Hygiene Kits', icon: 'Droplets', desc: 'Soap, toothpaste, sanitary items.', image: 'https://images.unsplash.com/photo-1583947581920-8c6a0d6a5e1d?auto=format&fit=crop&q=80&w=800' },
        { id: 'food', label: 'Food Items', icon: 'Utensils', desc: 'Non-perishable staples.', image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=800' },
    ],
    deliveryInfo: {
        title: "How to Deliver Items",
        description: "Please drop off items at our center or call us to arrange a pickup for larger contributions.",
        icon: 'Truck',
        image: 'https://images.unsplash.com/photo-1598981449422-3c83b879f790?auto=format&fit=crop&q=80&w=800'
    },
    volunteerInfo: {
        title: "Volunteer Your Time",
        description: "Join us in making a difference through skills, time, or community outreach.",
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
    },
    sponsorInfo: {
        title: "Sponsor or Donate",
        description: "Support our mission by sending your contribution directly through our bank account. Your donation helps provide education, safety, and hope to vulnerable children.",
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800'
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

export const CONTACT_METHODS = [
    { icon: 'MapPin', title: "Visit / Drop-off", content: CONTACT_INFO.address, image: "https://images.unsplash.com/photo-1594398997548-583163776796?auto=format&fit=crop&q=80&w=800" },
    { icon: 'Mail', title: "Email", content: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, image: "https://images.unsplash.com/photo-1557853194-27230455d35a?auto=format&fit=crop&q=80&w=800" },
    { icon: 'Phone', title: "Call", content: CONTACT_INFO.displayPhone, href: `tel:${CONTACT_INFO.rawPhone}`, image: "https://images.unsplash.com/photo-1586953208448-3151cf794014?auto=format&fit=crop&q=80&w=800" },
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://www.facebook.com/61575204286318/posts/pfbid034621S3CEyUPajVdwJPxQ27A29aBjbzkJjWS3XHxT1kbW2zoJTWephy6LKxFqFfwrl/?app=fbl', desc: 'Join our community for daily updates and stories.', image: 'https://images.unsplash.com/photo-1633675254053-524a35031a29?auto=format&fit=crop&q=80&w=800' },
    { name: 'Instagram', icon: 'Instagram', url: '#', desc: 'See the moments of joy and impact through our photos.', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800' },
    { name: 'Twitter / X', icon: 'Twitter', url: '#', desc: 'Follow for news, announcements, and live updates.', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=800' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', desc: 'Connect with us for professional partnerships and networking.', image: 'https://images.unsplash.com/photo-1611944212129-29955ae40213?auto=format&fit=crop&q=80&w=800' },
];