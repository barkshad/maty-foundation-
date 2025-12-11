import { CLOUDINARY_CONFIG, FIREBASE_CONFIG } from '../config';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- Cloudinary Logic ---

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  error?: { message: string };
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  if (CLOUDINARY_CONFIG.cloudName === "YOUR_CLOUD_NAME") {
    throw new Error("Please configure your Cloudinary Cloud Name in config.ts");
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data: CloudinaryResponse = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};

// --- Firebase Logic ---

let storage: any = null;

const initFirebase = () => {
  if (!storage && FIREBASE_CONFIG.apiKey !== "YOUR_FIREBASE_API_KEY") {
    try {
      const app = initializeApp(FIREBASE_CONFIG);
      storage = getStorage(app);
    } catch (e) {
      console.error("Firebase init failed:", e);
    }
  }
  return storage;
};

export const uploadToFirebase = async (file: File, path: string = 'uploads'): Promise<string> => {
  const storageInstance = initFirebase();
  
  if (!storageInstance) {
     throw new Error("Firebase not configured. Please check config.ts");
  }

  try {
    const storageRef = ref(storageInstance, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    throw error;
  }
};
