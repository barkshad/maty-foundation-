
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF3FnrxPYa6Hj_0lIT59FP9CSCIk7aS0w",
  authDomain: "mati-foundation-2d67e.firebaseapp.com",
  projectId: "mati-foundation-2d67e",
  storageBucket: "mati-foundation-2d67e.firebasestorage.app",
  messagingSenderId: "769000463528",
  appId: "1:769000463528:web:efbfbb32b885aa7071369d",
  measurementId: "G-EHP18C5S41"
};

// Initialize Firebase safely (Singleton pattern to prevent re-initialization errors in React)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Helper wrappers
export const liveDocRef = () => doc(db, 'website_content', 'main_v1');

export {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot
};
