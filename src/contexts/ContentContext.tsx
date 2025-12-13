
import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebsiteState, GalleryItem, Program } from '../types';
import { DEFAULT_WEBSITE_STATE } from '../constants';
import { db, auth } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

interface ContentContextType {
  content: WebsiteState;
  state: WebsiteState; // Alias for Admin compatibility
  loading: boolean;
  updateHero: (data: Partial<WebsiteState['hero']>) => void;
  updateContact: (data: any) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: number) => void;
  updateProgram: (program: Program) => void;
  saveToCloud: (data: WebsiteState, msg?: string) => Promise<void>;
  updateSection: (section: keyof WebsiteState, data: any) => void;
  syncLocalData: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteState>(DEFAULT_WEBSITE_STATE);
  const [loading, setLoading] = useState(true);

  // Load from Firebase on mount
  useEffect(() => {
    const docRef = doc(db, 'website_content', 'main_v1');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        // Cast to WebsiteState to ensure type safety
        setContent(docSnap.data() as WebsiteState);
        console.log("🔥 Synced with Cloud Database");
      } else {
        console.log("⚠️ No cloud data found, using defaults. Saving initial state...");
        setDoc(docRef, DEFAULT_WEBSITE_STATE).catch(console.error);
        setContent(DEFAULT_WEBSITE_STATE);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const saveToCloud = async (newData: WebsiteState, msg?: string) => {
    // Optimistic update
    setContent(newData);
    
    if (!auth.currentUser) {
      console.warn("User not logged in. Attempting to save...");
    }

    try {
      await setDoc(doc(db, 'website_content', 'main_v1'), newData, { merge: true });
      if (msg) console.log(msg);
    } catch (e) {
      console.error("❌ Failed to save to cloud:", e);
      alert("Error saving changes. Are you logged in?");
    }
  };

  const updateHero = (data: Partial<WebsiteState['hero']>) => {
    const next = { ...content, hero: { ...content.hero, ...data } };
    saveToCloud(next);
  };

  const updateContact = (data: any) => {
     // Map legacy contact updates to company object
     // Assuming data contains { email, phone, address }
     const next = { 
        ...content, 
        company: { 
            ...content.company, 
            ...data 
        } 
    };
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

  const updateSection = (section: keyof WebsiteState, data: any) => {
      const next = { ...content, [section]: data };
      saveToCloud(next);
  };

  const syncLocalData = () => {
      saveToCloud(DEFAULT_WEBSITE_STATE, "Reset to Local Defaults");
  };

  return (
    <ContentContext.Provider value={{ 
        content, 
        state: content, // Alias
        loading, 
        updateHero, 
        updateContact, 
        addGalleryItem, 
        deleteGalleryItem, 
        updateProgram,
        saveToCloud,
        updateSection,
        syncLocalData
    }}>
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

export const useData = useContent;
