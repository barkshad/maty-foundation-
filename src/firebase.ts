
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore';
import { FIREBASE_CONFIG } from './config';

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Helper wrappers for Hybrid CMS
export const liveDocRef = () => doc(db, 'website_content', 'live_data');
export const inquiriesCollectionRef = () => collection(db, 'inquiries');
export const auditLogsCollectionRef = () => collection(db, 'audit_logs');
export const versionsCollectionRef = () => collection(db, 'website_content', 'live_data', 'versions');

export {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs
};
