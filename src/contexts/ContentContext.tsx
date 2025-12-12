
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { WebsiteState, Program } from '../types';
import { DEFAULT_WEBSITE_STATE } from '../constants';
import { liveDocRef, getDoc, setDoc, addDoc, serverTimestamp, auditLogsCollectionRef, versionsCollectionRef, auth } from '../firebase';

// Helper to map old "contact" structure to new "company" structure for compatibility
const mapStateToLegacy = (state: WebsiteState) => {
  return {
    ...state,
    contact: {
      email: state.company.email,
      phone: state.company.phone,
      address: state.company.address
    }
  };
};

// We define a type that includes both new state fields and legacy aliases
type AugmentedContentState = WebsiteState & {
  contact: { email: string; phone: string; address: string };
};

interface ContentContextType {
  content: AugmentedContentState;
  updateHero: (data: Partial<WebsiteState['hero']>) => void;
  updateContact: (data: Partial<WebsiteState['company']>) => void;
  addGalleryItem: (item: any) => void;
  deleteGalleryItem: (id: number) => void;
  updateProgram: (program: Program) => void;
  loading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

function mergeStates(local: WebsiteState, cloud: Partial<WebsiteState>): WebsiteState {
  return { ...local, ...cloud };
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WebsiteState>(DEFAULT_WEBSITE_STATE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Fetch from Cloud on Mount
  const fetchLive = useCallback(async () => {
    setLoading(true);
    try {
      const snap = await getDoc(liveDocRef());
      if (snap.exists()) {
        const cloudData = snap.data() as Partial<WebsiteState>;
        const merged = mergeStates(DEFAULT_WEBSITE_STATE, cloudData);
        setState(merged);
        console.log("✅ Loaded content from Cloud Database");
      } else {
        console.log("⚠️ Cloud empty, using local defaults");
        setState(DEFAULT_WEBSITE_STATE);
      }
    } catch (err: any) {
      console.error('❌ Failed to fetch live data', err);
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLive();
  }, [fetchLive]);

  // 2. Save Helper
  const saveToCloud = async (newState: WebsiteState, action: string) => {
    // Optimistic update
    setState(newState);

    if (!auth.currentUser) {
      console.warn("⚠️ Not logged in. Changes will not persist to cloud.");
      return;
    }

    try {
      // Create version snapshot
      const snap = await getDoc(liveDocRef());
      if (snap.exists()) {
        await addDoc(versionsCollectionRef(), { ...snap.data(), archivedAt: serverTimestamp() });
      }

      // Save new data
      await setDoc(liveDocRef(), { ...newState, lastUpdated: serverTimestamp() });

      // Audit log
      await addDoc(auditLogsCollectionRef(), {
        action,
        adminEmail: auth.currentUser.email,
        timestamp: serverTimestamp()
      });
      console.log("✅ Saved to Cloud Database");
    } catch (e) {
      console.error("❌ Save failed", e);
      alert("Failed to save to cloud. Check your connection.");
    }
  };

  // 3. Actions
  const updateHero = (data: Partial<WebsiteState['hero']>) => {
    const next = { ...state, hero: { ...state.hero, ...data } };
    saveToCloud(next, 'UPDATE_HERO');
  };

  const updateContact = (data: Partial<WebsiteState['company']>) => {
    const next = { ...state, company: { ...state.company, ...data } };
    saveToCloud(next, 'UPDATE_CONTACT');
  };

  const addGalleryItem = (item: any) => {
    const nextItem = { ...item, id: Date.now() };
    const next = { ...state, gallery: [nextItem, ...state.gallery] };
    saveToCloud(next, 'ADD_GALLERY_ITEM');
  };

  const deleteGalleryItem = (id: number) => {
    const next = { ...state, gallery: state.gallery.filter(g => g.id !== id) };
    saveToCloud(next, 'DELETE_GALLERY_ITEM');
  };

  const updateProgram = (updatedProgram: Program) => {
    const next = {
      ...state,
      programs: state.programs.map(p => p.id === updatedProgram.id ? updatedProgram : p)
    };
    saveToCloud(next, 'UPDATE_PROGRAM');
  };

  const value = {
    content: mapStateToLegacy(state), // Ensure backward compatibility
    updateHero,
    updateContact,
    addGalleryItem,
    deleteGalleryItem,
    updateProgram,
    loading,
    error
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
// Alias
export const useData = useContent;
