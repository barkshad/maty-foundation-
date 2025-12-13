
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Check, Image as ImageIcon, Loader, XCircle } from 'lucide-react';
import { isVideo, getOptimizedMediaUrl } from '../utils/media';
import { uploadToCloudinary } from '../services/mediaService';

interface ImageUploaderProps {
  label?: string;
  currentImage?: string;
  onUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  label = "Upload Media", 
  currentImage, 
  onUpload 
}) => {
  const [preview, setPreview] = useState(currentImage);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreview(currentImage);
  }, [currentImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);

    try {
      // Direct API Upload
      console.log("Starting upload for:", file.name);
      const url = await uploadToCloudinary(file);
      console.log("Upload successful:", url);
      setPreview(url);
      onUpload(url);

    } catch (err: any) {
      console.error("Upload failed in component:", err);
      setError("Upload failed. Please check your internet or config.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  const optimizedPreview = getOptimizedMediaUrl(preview);
  const isVideoPreview = isVideo(preview);

  return (
    <div className="mb-6">
      <label className="block text-sm font-bold mb-2 text-slate-700">{label}</label>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Hidden Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept="image/*,video/*"
        />

        {/* Preview Area */}
        <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50 flex items-center justify-center flex-shrink-0 shadow-inner group">
          {uploading ? (
             <div className="flex flex-col items-center justify-center text-blue-600">
                <Loader className="animate-spin w-8 h-8 mb-2" />
                <span className="text-xs font-bold">Uploading...</span>
             </div>
          ) : preview ? (
            isVideoPreview ? (
               <video 
                 src={optimizedPreview} 
                 className="w-full h-full object-cover" 
                 muted 
                 loop 
                 autoPlay 
                 playsInline 
               />
            ) : (
               <img 
                 src={optimizedPreview} 
                 alt="Preview" 
                 className="w-full h-full object-cover" 
               />
            )
          ) : (
            <div className="text-slate-400 flex flex-col items-center">
              <ImageIcon size={32} className="mb-2 opacity-50"/>
              <span className="text-xs">No media</span>
            </div>
          )}
          
          {!uploading && preview && (
             <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1 shadow-md z-10">
                <Check size={12} />
             </div>
          )}
        </div>

        {/* Action Area */}
        <div className="flex-1 w-full">
          <button
            type="button"
            onClick={triggerSelect}
            disabled={uploading}
            className={`w-full h-40 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all group cursor-pointer
              ${error ? 'border-red-300 bg-red-50' : 'border-blue-300 bg-blue-50 hover:bg-blue-100'}
              ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {error ? (
                <>
                   <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-red-500">
                      <XCircle className="w-6 h-6" />
                   </div>
                   <span className="font-bold text-sm text-red-600">Upload Failed</span>
                   <span className="text-xs text-red-400 mt-1 px-4 text-center">{error}</span>
                </>
            ) : (
                <>
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform text-blue-600">
                        {uploading ? <Loader className="w-6 h-6 animate-spin"/> : <Upload className="w-6 h-6" />}
                    </div>
                    <span className="font-bold text-sm text-blue-700">
                        {uploading ? "Uploading to Cloud..." : "Click to Upload Media"}
                    </span>
                    <span className="text-xs text-blue-400 mt-1">Images & Videos up to 55MB</span>
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
