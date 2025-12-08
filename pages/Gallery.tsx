import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    // Education / Learning
    { 
      url: "https://images.unsplash.com/photo-1427504746696-ea470a74ea02?auto=format&fit=crop&q=80&w=400", 
      caption: "Morning Classes" 
    },
    { 
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400", 
      caption: "Computer Lab" 
    },
    { 
      url: "https://images.unsplash.com/photo-1577896334623-e71387e143f6?auto=format&fit=crop&q=80&w=400", 
      caption: "Art & Creativity" 
    },
    // Outreach / Community
    { 
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400", 
      caption: "Community Meeting" 
    },
    { 
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400", 
      caption: "Medical Camp" 
    },
    // Daily Life / Fun
    { 
      url: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=400", 
      caption: "Recess Time" 
    },
    { 
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400", 
      caption: "Field Trip" 
    },
    { 
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400", 
      caption: "Celebration Day" 
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Life at Mati</h1>
          <p className="text-slate-500">Capturing moments of joy, growth, and everyday life.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all cursor-pointer bg-slate-200"
            >
              <img 
                src={img.url} 
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