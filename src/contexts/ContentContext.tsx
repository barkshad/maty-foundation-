
import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebsiteState, GalleryItem, Program } from '../types';
import { DEFAULT_WEBSITE_STATE } from '../constants';
import { db } from '../firebase';
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

  // 1. Sync with Firebase Firestore on Mount
  useEffect(() => {
    const docRef = doc(db, 'website_content', 'main_v1');
    
    // Real-time listener: This triggers whenever the database changes on ANY device
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as WebsiteState;
        // Merge with default state to ensure structure exists if DB is partial
        setContent({ ...DEFAULT_WEBSITE_STATE, ...data });
        console.log("🔥 Synced with Cloud Database");
      } else {
        console.log("⚠️ No cloud data found. Initializing Database...");
        // If doc doesn't exist, create it with default data
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

  // 2. Main Save Function
  const saveToCloud = async (newData: WebsiteState, msg?: string) => {
    // Optimistic UI update
    setContent(newData);
    
    try {
      await setDoc(doc(db, 'website_content', 'main_v1'), newData, { merge: true });
      if (msg) console.log(msg);
    } catch (e) {
      console.error("❌ Failed to save to cloud:", e);
      alert("Error saving changes. Check internet connection.");
    }
  };

  // 3. Helper Functions (Now using saveToCloud)

  const updateHero = (data: Partial<WebsiteState['hero']>) => {
    const next = { ...content, hero: { ...content.hero, ...data } };
    saveToCloud(next);
  };

  const updateContact = (data: any) => {
     // Map legacy contact updates to company object
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
    saveToCloud(next, "Gallery Item Added");
  };

  const deleteGalleryItem = (id: number) => {
    const next = { ...content, gallery: content.gallery.filter(g => g.id !== id) };
    saveToCloud(next, "Gallery Item Deleted");
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
      saveToCloud(DEFAULT_WEBSITE_STATE, "Reset to Defaults");
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
