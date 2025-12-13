
export const isVideo = (url?: string): boolean => {
  if (!url) return false;
  // Check for common video extensions or Cloudinary video path
  // Also checks for specific video transformation flags in case extension is missing
  return !!(url.match(/\.(mp4|webm|ogg|mov|avi|mkv|m4v)$/i) || url.includes('/video/upload/') || url.includes('f_mp4'));
};

export const getOptimizedMediaUrl = (url?: string): string => {
  if (!url) return '';
  
  // Only optimize Cloudinary URLs
  if (!url.includes('cloudinary.com')) return url;

  // Avoid double optimization if params already exist
  if (url.includes('q_auto') || url.includes('f_mp4')) return url;

  // Split at the upload segment to insert transformations
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;

  const [baseUrl, assetPath] = parts;
  
  if (isVideo(url)) {
    // Force MP4 format (f_mp4), use auto video codec (vc_auto), and auto quality (q_auto)
    // This ensures .mov or other formats play correctly in all browsers
    return `${baseUrl}/upload/f_mp4,vc_auto,q_auto/${assetPath}`;
  } else {
    // For images, just use auto format and quality
    return `${baseUrl}/upload/f_auto,q_auto/${assetPath}`;
  }
};
