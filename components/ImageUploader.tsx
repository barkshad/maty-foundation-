
import React, { useState } from 'react';
import { Upload, X, Check, Loader } from 'lucide-react';
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
      } catch (err) {
        alert("Upload failed. Please check config.ts and console.");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-gray-700">{label}</label>
      <div className="flex items-start gap-4">
        {preview && (
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
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
                  <span className="text-sm">Uploading to Cloudinary...</span>
                </>
              ) : (
                <>
                  <Upload className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Click to upload</span>
                  <span className="text-xs mt-1 text-gray-400">JPG, PNG, MP4</span>
                </>
              )}
            </div>
          </div>
          {preview && !uploading && (
             <p className="text-xs text-green-600 mt-2 flex items-center"><Check size={12} className="mr-1"/> Image ready</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
