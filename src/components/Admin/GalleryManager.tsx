
import React, { useState } from 'react';
import { GalleryItem } from '../../types';
import ImageUploader from '../ImageUploader';
import { Trash2, Filter, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryManagerProps {
  gallery: GalleryItem[];
  onUpdate: (gallery: GalleryItem[]) => void;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ gallery, onUpdate }) => {
  const [filter, setFilter] = useState<'all' | 'edu' | 'community' | 'welfare'>('all');
  const [isAdding, setIsAdding] = useState(false);
  const [newImage, setNewImage] = useState<Partial<GalleryItem>>({ cat: 'all', caption: '' });

  const filteredGallery = filter === 'all' ? gallery : gallery.filter(g => g.cat === filter);

  const handleAdd = (url: string) => {
    const item: GalleryItem = {
      id: Date.now(),
      url,
      caption: newImage.caption || 'New Image',
      cat: (newImage.cat as any) || 'all'
    };
    onUpdate([item, ...gallery]);
    setIsAdding(false);
    setNewImage({ cat: 'all', caption: '' });
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this image?")) {
      onUpdate(gallery.filter(g => g.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-6">
           <div>
             <h2 className="font-bold text-slate-800 text-lg">Media Library</h2>
             <p className="text-sm text-slate-500">Upload photos for your gallery.</p>
           </div>
           <button 
             onClick={() => setIsAdding(!isAdding)}
             className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center ${isAdding ? 'bg-slate-100 text-slate-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
           >
             {isAdding ? 'Cancel' : <><Plus size={16} className="mr-2"/> Add New Image</>}
           </button>
        </div>

        <AnimatePresence>
          {isAdding && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">1. Image Details</label>
                        <input 
                           type="text" 
                           placeholder="Caption (e.g. Students in class)" 
                           className="w-full px-4 py-2 mb-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                           value={newImage.caption}
                           onChange={(e) => setNewImage({...newImage, caption: e.target.value})}
                        />
                        <select
                           className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                           value={newImage.cat}
                           onChange={(e) => setNewImage({...newImage, cat: e.target.value as any})}
                        >
                            <option value="all">General / All</option>
                            <option value="edu">Education</option>
                            <option value="community">Community</option>
                            <option value="welfare">Child Welfare</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">2. Upload File</label>
                        <ImageUploader 
                          label=""
                          onUpload={handleAdd}
                        />
                    </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gallery Grid */}
      <div>
        <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
            <Filter size={16} className="text-slate-400 mr-2"/>
            {['all', 'edu', 'community', 'welfare'].map(cat => (
                <button
                   key={cat}
                   onClick={() => setFilter(cat as any)}
                   className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-colors whitespace-nowrap ${
                     filter === cat 
                     ? 'bg-slate-800 text-white' 
                     : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                   }`}
                >
                   {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {filteredGallery.map((item) => (
             <motion.div 
               layout
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               key={item.id} 
               className="group relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200"
             >
                <img src={item.url} alt={item.caption} className="w-full h-full object-cover transition-transform group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                   <p className="text-white text-xs font-bold truncate mb-2">{item.caption}</p>
                   <button 
                     onClick={() => handleDelete(item.id)}
                     className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 self-end transition-colors"
                   >
                     <Trash2 size={14} />
                   </button>
                </div>
                <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">
                    {item.cat}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryManager;
