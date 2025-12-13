
import { CLOUDINARY_CONFIG } from '../config';
import { storage } from '../firebase'; // Import centralized storage instance
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- Cloudinary Logic ---

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  resource_type: string;
  error?: { message: string };
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  if (CLOUDINARY_CONFIG.cloudName === "YOUR_CLOUD_NAME" || !CLOUDINARY_CONFIG.uploadPreset) {
    throw new Error("Please configure your Cloudinary Cloud Name and Preset in config.ts");
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  try {
    // Use 'auto' resource type to support images and videos
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/auto/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data: CloudinaryResponse = await response.json();

    if (data.error) {
      console.error("Cloudinary API Error:", data.error.message);
      throw new Error(data.error.message);
    }

    return data.secure_url;
  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error(error.message || "Upload failed");
  }
};

// --- Firebase Logic ---

export const uploadToFirebase = async (file: File, path: string = 'uploads'): Promise<string> => {
  if (!storage) {
     throw new Error("Firebase Storage not initialized. Check firebase.ts configuration.");
  }

  try {
    // Create a unique filename
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    
    // Upload
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    throw error;
  }
};
