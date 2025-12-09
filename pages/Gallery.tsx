import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'edu' | 'community' | 'welfare'>('all');

  const images = [
    { id: 1, cat: 'edu', url: "https://camfed.org/wp-content/uploads/2021/07/Hero_-_CAMA_Zambia_outdoor_lessons.jpg", caption: "Outdoor Classroom" },
    { id: 2, cat: 'community', url: "https://static.wixstatic.com/media/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png/v1/fill/w_640%2Ch_446%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3ec3c_d97978e55e294e449545fe551cb85635~mv2.png", caption: "Community Gathering" },
    { id: 3, cat: 'welfare', url: "https://i0.wp.com/africanrelief.org/wp-content/uploads/2024/08/BWA-Kabwata-Orphan-Image-Ironisitc.jpeg?fit=2160%2C1440&ssl=1", caption: "Sharing a Meal" },
    { id: 4, cat: 'edu', url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", caption: "Focused Learning" },
    { id: 5, cat: 'community', url: "https://images.unsplash.com/photo-1621473105269-58d04275d22f?auto=format&fit=crop&q=80&w=600", caption: "Planting Together" },
    { id: 6, cat: 'welfare', url: "https://images.unsplash.com/photo-1594883498394-11855a805f77?auto=format&fit=crop&q=80&w=600", caption: "New School Shoes" },
    { id: 7, cat: 'edu', url: "https://images.unsplash.com/photo-1618143099239-c8b519a86a23?auto=format&fit=crop&q=80&w=600", caption: "Joyful Learners" },
    { id: 8, cat: 'community', url: "https://images.unsplash.com/photo-1517594422361-5e3e8a30be48?auto=format&fit=crop&q=80&w=600", caption: "Building Friendships" },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.cat === filter);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Gallery</h1>
          <p className="text-slate-600">A glimpse into the moments of hope and connection we create together.</p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-6">
            {[
              { key: 'all', label: 'All Photos' },
              { key: 'edu', label: 'Education' },
              { key: 'community', label: 'Community' },
              { key: 'welfare', label: 'Child Welfare' }
            ].map((f) => (
              <button 
                key={f.key}
                onClick={() => setFilter(f.key as any)}
                className={`px-4 sm:px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                  filter === f.key
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'bg-white text-slate-500 hover:bg-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
            >
              <img 
                src={img.url} 
                loading="lazy"
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-center p-2">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
