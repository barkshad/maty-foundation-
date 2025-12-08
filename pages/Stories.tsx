import React from 'react';
import { STORIES } from '../constants';

const Stories: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Stories of Hope</h1>
        <p className="text-slate-600">Real lives, transformed.</p>
      </div>
      
      <div className="space-y-10">
        {STORIES.map((story) => (
          <article 
            key={story.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-start border border-stone-100 hover:shadow-lg transition-shadow"
          >
            <div className="md:w-1/3 w-full h-56 rounded-lg overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center text-xs font-bold tracking-wider text-brand-primary mb-2 uppercase">
                <span className="bg-blue-50 px-2 py-1 rounded">{story.date}</span>
                <span className="mx-2 text-slate-300">•</span>
                <span>{story.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3 hover:text-brand-primary transition-colors cursor-pointer">
                {story.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {story.excerpt}
              </p>
              <button className="text-brand-primary font-bold hover:underline text-sm">
                Read Full Story &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Stories;