import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: 1011, caption: "Morning Assembly" },
    { id: 1025, caption: "Our Rescue Dog, Max" },
    { id: 1059, caption: "Computer Lab" },
    { id: 106, caption: "Spring Garden" },
    { id: 14, caption: "Art Class" },
    { id: 17, caption: "Community Walk" },
    { id: 28, caption: "Study Time" },
    { id: 29, caption: "Mountain Trip" },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Life at Mati</h1>
          <p className="text-slate-500">Capturing moments of joy, growth, and everyday life.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div 
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all cursor-pointer bg-slate-200"
            >
              <img 
                src={`https://picsum.photos/id/${img.id}/400/400`} 
                loading="lazy"
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium text-sm border border-white px-3 py-1 rounded-full">
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