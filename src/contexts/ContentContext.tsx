

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { WebsiteState, AuditLog } from '../types';
import { DEFAULT_WEBSITE_STATE } from '../constants';
import { liveDocRef, getDoc, setDoc, addDoc, serverTimestamp, auditLogsCollectionRef, versionsCollectionRef } from '../firebase';
import { auth } from '../firebase';

interface DataContextType {
  state: WebsiteState;
  loading: boolean;
  error: string | null;
  refreshFromCloud: () => Promise<void>;
  syncLocalData: () => Promise<void>;
  saveToCloud: (newState: WebsiteState, auditAction: string) => Promise<void>;
  updateSection: <K extends keyof WebsiteState>(section: K, data: WebsiteState[K]) => void;
  // Legacy aliases for existing components
  content: WebsiteState;
  updateHero: (data: Partial<WebsiteState['hero']>) => void;
  updateContact: (data: Partial<WebsiteState['company']>) => void;
  addGalleryItem: (item: any) => void;
  deleteGalleryItem: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Deep merge helper could be added here, but for now we do top-level object merges which is usually sufficient for this structure.
function mergeStates(local: WebsiteState, cloud: Partial<WebsiteState>): WebsiteState {
  // We prefer cloud arrays over local arrays to allow deletion/reordering
  return { ...local, ...cloud };
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WebsiteState>(DEFAULT_WEBSITE_STATE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. HYBRID HYDRATION
  const fetchLive = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const snap = await getDoc(liveDocRef());
      if (snap.exists()) {
        const cloudData = snap.data() as Partial<WebsiteState>;
        const merged = mergeStates(DEFAULT_WEBSITE_STATE, cloudData);
        setState(merged);
        console.log("Hydrated from Cloud");
      } else {
        console.log("Cloud Empty - Using Local Constants");
        setState(DEFAULT_WEBSITE_STATE);
      }
    } catch (err: any) {
      console.warn('Failed to fetch live data, using local constants', err);
      setError(err?.message || 'Unknown error');
      setState(DEFAULT_WEBSITE_STATE);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLive();
  }, [fetchLive]);

  // 2. SYNC ACTIONS
  const refreshFromCloud = async () => {
    await fetchLive();
  };

  const syncLocalData = async () => {
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      // Create version snapshot before overwrite if it existed
      const snap = await getDoc(liveDocRef());
      if (snap.exists()) {
         await addDoc(versionsCollectionRef(), { ...snap.data(), archivedAt: serverTimestamp() });
      }
      
      await setDoc(liveDocRef(), { ...DEFAULT_WEBSITE_STATE, lastUpdated: serverTimestamp() });
      setState(DEFAULT_WEBSITE_STATE);
      
      // Audit
      await addDoc(auditLogsCollectionRef(), {
        action: 'HARD_RESET_TO_LOCAL',
        adminEmail: auth.currentUser.email || 'unknown',
        timestamp: serverTimestamp(),
      });
    } catch (err: any) {
      console.error(err);
      setError("Sync Failed");
    } finally {
      setLoading(false);
    }
  };

  const saveToCloud = async (newState: WebsiteState, auditAction: string) => {
    if (!auth.currentUser) return;
    
    // Optimistic Update
    setState(newState);

    try {
      // 1. Snapshot old version
      const snap = await getDoc(liveDocRef());
      if (snap.exists()) {
        await addDoc(versionsCollectionRef(), { ...snap.data(), archivedAt: serverTimestamp() });
      }

      // 2. Save new version
      await setDoc(liveDocRef(), { ...newState, lastUpdated: serverTimestamp() });

      // 3. Audit Log
      await addDoc(auditLogsCollectionRef(), {
        action: auditAction,
        adminEmail: auth.currentUser.email || 'unknown',
        timestamp: serverTimestamp(),
      });

    } catch (e: any) {
      console.error("Save failed", e);
      setError("Failed to save changes to cloud.");
      // Revert would happen here in a complex app, or just show error
    }
  };

  const updateSection = <K extends keyof WebsiteState>(section: K, data: WebsiteState[K]) => {
     const nextState = { ...state, [section]: data };
     setState(nextState);
     // Note: This only updates local state. Consumer must call saveToCloud to persist.
     // In the admin panel, we pass this modified state to saveToCloud.
  };

  // --- LEGACY COMPATIBILITY HELPERS ---
  const updateHero = (data: Partial<WebsiteState['hero']>) => {
    const next = { ...state, hero: { ...state.hero, ...data } };
    saveToCloud(next, 'UPDATE_HERO');
  };
  const updateContact = (data: Partial<WebsiteState['company']>) => {
    const next = { ...state, company: { ...state.company, ...data } }; // Mapping contact to company for new structure
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

  const value: DataContextType = {
    state,
    content: state, // Alias for legacy
    loading,
    error,
    refreshFromCloud,
    syncLocalData,
    saveToCloud,
    updateSection,
    updateHero,
    updateContact,
    addGalleryItem,
    deleteGalleryItem
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useContent = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
// Alias for new Admin components
export const useData = useContent;