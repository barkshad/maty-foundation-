import React from 'react';

const Gallery: React.FC = () => {
  // Simulating a gallery list
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
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4 text-center">Life at Mati</h1>
        <p className="text-stone-500 text-center mb-12">Capturing moments of joy, growth, and everyday life.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden rounded-xl bg-stone-200 cursor-pointer">
              <img 
                src={`https://picsum.photos/id/${img.id}/400/400`} 
                loading="lazy"
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
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