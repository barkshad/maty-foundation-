
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ContentState, GalleryItem, Program } from '../types';
import { PROGRAMS, STORIES, CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

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
  loading: boolean;
  updateHero: (data: Partial<ContentState['hero']>) => void;
  updateContact: (data: Partial<ContentState['contact']>) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: number) => void;
  updateProgram: (program: Program) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentState>(INITIAL_STATE);
  const [loading, setLoading] = useState(true);

  // Load from Firebase on mount
  useEffect(() => {
    const docRef = doc(db, 'website_content', 'main_v1');
    
    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setContent(prev => ({ ...prev, ...docSnap.data() }));
        console.log("🔥 Synced with Cloud Database");
      } else {
        console.log("⚠️ No cloud data found, using defaults. Saving initial state...");
        // If document doesn't exist, create it with initial state
        setDoc(docRef, INITIAL_STATE).catch(console.error);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Generic Save Function
  const saveToCloud = async (newData: ContentState) => {
    // Optimistic update
    setContent(newData);
    
    if (!auth.currentUser) {
      console.warn("User not logged in. Attempting to save...");
    }

    try {
      await setDoc(doc(db, 'website_content', 'main_v1'), newData, { merge: true });
    } catch (e) {
      console.error("❌ Failed to save to cloud:", e);
      alert("Error saving changes. Are you logged in?");
    }
  };

  const updateHero = (data: Partial<ContentState['hero']>) => {
    const next = { ...content, hero: { ...content.hero, ...data } };
    saveToCloud(next);
  };

  const updateContact = (data: Partial<ContentState['contact']>) => {
    const next = { ...content, contact: { ...content.contact, ...data } };
    saveToCloud(next);
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const next = { ...content, gallery: [newItem, ...content.gallery] };
    saveToCloud(next);
  };

  const deleteGalleryItem = (id: number) => {
    const next = { ...content, gallery: content.gallery.filter(g => g.id !== id) };
    saveToCloud(next);
  };

  const updateProgram = (updatedProgram: Program) => {
    const next = {
      ...content,
      programs: content.programs.map(p => p.id === updatedProgram.id ? updatedProgram : p)
    };
    saveToCloud(next);
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateHero, updateContact, addGalleryItem, deleteGalleryItem, updateProgram }}>
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

// Also export as useData for compatibility with Admin panel
export const useData = useContent;
