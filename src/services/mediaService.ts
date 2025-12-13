
import { CLOUDINARY_CONFIG } from '../config';
import { storage } from '../firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- Cloudinary Logic ---

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  resource_type: string;
  error?: { message: string };
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  // Validation
  if (!CLOUDINARY_CONFIG.cloudName || !CLOUDINARY_CONFIG.uploadPreset) {
    throw new Error("Missing Cloudinary Configuration. Please check config.ts");
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  // Folder organization (optional)
  formData.append('folder', 'mati_foundation'); 

  try {
    const cloudName = CLOUDINARY_CONFIG.cloudName;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const data: CloudinaryResponse = await response.json();

    if (!response.ok) {
      const errorMsg = data.error?.message || `HTTP Error: ${response.status}`;
      console.error("Cloudinary API Error Details:", data);
      throw new Error(errorMsg);
    }

    return data.secure_url;
  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);
    // Provide a user-friendly error if the preset is likely wrong
    if (error.message.includes('upload_preset')) {
      throw new Error("Invalid Upload Preset. Check Cloudinary Settings > Upload > Upload presets.");
    }
    throw new Error(error.message || "Upload failed");
  }
};

// --- Firebase Logic (Fallback) ---

export const uploadToFirebase = async (file: File, path: string = 'uploads'): Promise<string> => {
  if (!storage) {
     throw new Error("Firebase Storage not initialized.");
  }

  try {
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    throw error;
  }
};
