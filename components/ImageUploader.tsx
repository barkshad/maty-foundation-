
import React, { useState } from 'react';
import { Upload, X, Check, Loader, Video } from 'lucide-react';
import { uploadToCloudinary } from '../services/mediaService';

interface ImageUploaderProps {
  currentImage?: string;
  onUpload: (url: string) => void;
  label?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ currentImage, onUpload, label = "Upload Image" }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploading(true);
      try {
        const url = await uploadToCloudinary(file);
        setPreview(url);
        onUpload(url);
      } catch (err: any) {
        alert(`Upload failed: ${err.message}`);
      } finally {
        setUploading(false);
      }
    }
  };

  const isVideo = (url?: string) => {
    if (!url) return false;
    // Check for common video extensions or Cloudinary video path
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-gray-700">{label}</label>
      <div className="flex items-start gap-4">
        {preview && (
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
            {isVideo(preview) ? (
               <video src={preview} className="w-full h-full object-cover" muted loop autoPlay playsInline />
            ) : (
               <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            )}
          </div>
        )}
        <div className="flex-1">
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <input 
              type="file" 
              accept="image/*,video/*"
              onChange={handleFileChange} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={uploading}
            />
            <div className="flex flex-col items-center justify-center text-gray-500">
              {uploading ? (
                <>
                  <Loader className="w-6 h-6 animate-spin mb-2 text-blue-500" />
                  <span className="text-sm">Uploading...</span>
                </>
              ) : (
                <>
                  <div className="flex gap-2 mb-2">
                    <Upload className="w-6 h-6" />
                    <Video className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">Click to upload photo or video</span>
                  <span className="text-xs mt-1 text-gray-400">JPG, PNG, MP4</span>
                </>
              )}
            </div>
          </div>
          {preview && !uploading && (
             <p className="text-xs text-green-600 mt-2 flex items-center"><Check size={12} className="mr-1"/> File ready</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
