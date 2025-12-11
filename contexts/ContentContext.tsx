
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContentState, GalleryItem, Program, Story } from '../types';
import { PROGRAMS, STORIES, CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const INITIAL_STATE: ContentState = {
  hero: {
    headline: "Empowering Children. Strengthening Communities.",
    subheadline: "Founded by Matilda Kashindo, Mati Foundation is an independent foundation providing education, care, and connection to Kenya’s orphans and vulnerable children.",
    image: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg"
  },
  impactStats: [
    { label: 'Children Supported', value: 200, suffix: '+', icon: 'Heart' },
    { label: 'Scholarships Given', value: 75, suffix: '+', icon: 'BookOpen' },
    { label: 'Families Engaged', value: 120, suffix: '+', icon: 'Users' },
    { label: 'Communities Reached', value: 15, suffix: '+', icon: 'Shield' },
  ],
  programs: PROGRAMS,
  stories: STORIES,
  gallery: [
    { id: 1, cat: 'edu', url: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg", caption: "Outdoor Classroom" },
    { id: 2, cat: 'community', url: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png", caption: "Community Gathering" },
    { id: 3, cat: 'welfare', url: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1", caption: "Sharing a Meal" },
    { id: 4, cat: 'edu', url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", caption: "Focused Learning" },
    { id: 5, cat: 'community', url: "https://images.unsplash.com/photo-1621473105269-58d04275d22f?auto=format&fit=crop&q=80&w=600", caption: "Planting Together" },
    { id: 6, cat: 'welfare', url: "https://images.unsplash.com/photo-1594883498394-11855a805f77?auto=format&fit=crop&q=80&w=600", caption: "New School Shoes" },
    { id: 7, cat: 'edu', url: "https://images.unsplash.com/photo-1618143099239-c8b519a86a23?auto=format&fit=crop&q=80&w=600", caption: "Joyful Learners" },
    { id: 8, cat: 'community', url: "https://images.unsplash.com/photo-1517594422361-5e3e8a30be48?auto=format&fit=crop&q=80&w=600", caption: "Building Friendships" },
  ],
  contact: {
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.displayPhone,
    address: CONTACT_INFO.address,
  },
  socials: SOCIAL_LINKS
};

interface ContentContextType {
  content: ContentState;
  updateHero: (data: Partial<ContentState['hero']>) => void;
  updateContact: (data: Partial<ContentState['contact']>) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: number) => void;
  updateProgram: (program: Program) => void;
  // Add other update methods as needed
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentState>(INITIAL_STATE);

  // Load from local storage on mount (Mock Persistence)
  useEffect(() => {
    const saved = localStorage.getItem('mati_site_content');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to load content", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('mati_site_content', JSON.stringify(content));
  }, [content]);

  const updateHero = (data: Partial<ContentState['hero']>) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, ...data } }));
  };

  const updateContact = (data: Partial<ContentState['contact']>) => {
    setContent(prev => ({ ...prev, contact: { ...prev.contact, ...data } }));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    setContent(prev => ({ ...prev, gallery: [newItem, ...prev.gallery] }));
  };

  const deleteGalleryItem = (id: number) => {
    setContent(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
  };

  const updateProgram = (updatedProgram: Program) => {
    setContent(prev => ({
      ...prev,
      programs: prev.programs.map(p => p.id === updatedProgram.id ? updatedProgram : p)
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateHero, updateContact, addGalleryItem, deleteGalleryItem, updateProgram }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
