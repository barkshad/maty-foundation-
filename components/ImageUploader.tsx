
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Check, Image as ImageIcon, Loader } from 'lucide-react';
import { CLOUDINARY_CONFIG } from '../config';
import { isVideo, getOptimizedMediaUrl } from '../utils/media';

// Define the Cloudinary global type
declare global {
  interface Window {
    cloudinary: any;
  }
}

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
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    setPreview(currentImage);
  }, [currentImage]);

  useEffect(() => {
    // Function to check and initialize the widget
    const initWidget = () => {
      if (window.cloudinary && window.cloudinary.createUploadWidget) {
        if (!widgetRef.current) {
          widgetRef.current = window.cloudinary.createUploadWidget(
            {
              cloudName: CLOUDINARY_CONFIG.cloudName,
              uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
              sources: ['local', 'url', 'camera'],
              resourceType: 'auto', // Auto allows both images and videos
              maxFileSize: 55000000, // 55MB
              multiple: false,
              styles: {
                  palette: {
                      window: "#FFFFFF",
                      windowBorder: "#90A0B3",
                      tabIcon: "#0D47A1",
                      menuIcons: "#5A616A",
                      textDark: "#000000",
                      textLight: "#FFFFFF",
                      link: "#1E88E5",
                      action: "#1E88E5",
                      inactiveTabIcon: "#0E2F5A",
                      error: "#F44235",
                      inProgress: "#0078FF",
                      complete: "#20B832",
                      sourceBg: "#E4EBF1"
                  },
                  fonts: {
                    "'Inter'": "https://fonts.googleapis.com/css?family=Inter",
                  }
              }
            },
            (error: any, result: any) => {
              if (!error && result && result.event === "success") {
                const url = result.info.secure_url;
                console.log("Media Uploaded Successfully:", url);
                setPreview(url);
                onUpload(url);
              } else if (error) {
                console.error("Cloudinary Widget Error:", error);
              }
            }
          );
        }
        setIsWidgetReady(true);
      } else {
        // Retry if script hasn't loaded yet
        setTimeout(initWidget, 500);
      }
    };

    initWidget();
  }, [onUpload]);

  const handleOpenWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    } else {
      if (!isWidgetReady) {
         alert("Cloudinary widget is still loading. Please check your internet connection and try again in a moment.");
      } else {
         alert("Widget failed to initialize. Please refresh the page.");
      }
    }
  };

  const optimizedPreview = getOptimizedMediaUrl(preview);
  const isVideoPreview = isVideo(preview);

  return (
    <div className="mb-6">
      <label className="block text-sm font-bold mb-2 text-slate-700">{label}</label>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Preview Area */}
        <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50 flex items-center justify-center flex-shrink-0 shadow-inner group">
          {preview ? (
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
          
          {preview && (
             <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1 shadow-md z-10">
                <Check size={12} />
             </div>
          )}
        </div>

        {/* Action Area */}
        <div className="flex-1 w-full">
          <button
            type="button"
            onClick={handleOpenWidget}
            disabled={!isWidgetReady}
            className="w-full h-40 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all flex flex-col items-center justify-center text-blue-600 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                {isWidgetReady ? <Upload className="w-6 h-6" /> : <Loader className="w-6 h-6 animate-spin"/>}
            </div>
            <span className="font-bold text-sm">
                {isWidgetReady ? "Upload Media" : "Loading Uploader..."}
            </span>
            <span className="text-xs text-blue-400 mt-1">Images & Videos up to 55MB</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
