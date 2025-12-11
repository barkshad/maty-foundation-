
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { useContent } from '../contexts/ContentContext';

const Gallery: React.FC = () => {
  const { content } = useContent();
  const [filter, setFilter] = useState<'all' | 'edu' | 'community' | 'welfare'>('all');

  const filteredImages = filter === 'all' 
    ? content.gallery 
    : content.gallery.filter(img => img.cat === filter);

  const isVideo = (url?: string) => {
    if (!url) return false;
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
  };

  return (
    <div className="min-h-screen pb-24 bg-background-soft">
      <div className="relative pt-20 pb-24 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1534182928399-73d8b1c42f3e?auto=format&fit=crop&q=80&w=1528" alt="Gallery of moments" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/70 to-accent-blue/40"></div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative z-10"
        >
          <AnimatedText text="Our Gallery" className="text-4xl font-serif font-bold mb-4 text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.3)]" />
          <p className="text-lg text-slate-100 [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]">A glimpse into the moments of hope and connection we create together.</p>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto py-20 px-4">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'edu', label: 'Education' },
            { key: 'community', label: 'Community' },
            { key: 'welfare', label: 'Child Welfare' }
          ].map((f) => (
            <motion.button 
              key={f.key}
              onClick={() => setFilter(f.key as any)}
              className={`px-4 sm:px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all relative ${
                filter === f.key
                ? 'btn-primary shadow-lg' 
                : 'bg-white border hover:bg-gray-100'
              }`}
              style={{ borderColor: filter !== f.key ? 'var(--border-color)' : 'transparent', color: filter !== f.key ? 'var(--text-light)' : 'var(--white)'}}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.label}
            </motion.button>
          ))}
        </div>
        
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white border card-shine"
                style={{ borderColor: 'var(--border-color)'}}
              >
                {isVideo(img.url) ? (
                  <video 
                    src={img.url} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <img 
                    src={img.url} 
                    loading="lazy"
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 pointer-events-none">
                  <span className="text-white font-bold text-sm [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredImages.length === 0 && (
             <div className="col-span-full text-center py-10 text-slate-400">
               No images found in this category.
             </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
