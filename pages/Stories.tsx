import React from 'react';
import { STORIES } from '../constants';

const Stories: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-stone-900 mb-12 text-center">Stories of Hope</h1>
      
      <div className="space-y-16">
        {STORIES.map((story) => (
          <article key={story.id} className="flex flex-col md:flex-row gap-8 items-start border-b border-stone-200 pb-16 last:border-0">
            <div className="md:w-1/3">
              <img src={story.image} alt={story.title} className="rounded-lg shadow-md w-full object-cover h-64" />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center text-sm text-brand-primary mb-3 font-medium">
                <span>{story.date}</span>
                <span className="mx-2">•</span>
                <span>{story.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4 hover:text-brand-primary cursor-pointer transition-colors">
                {story.title}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                {story.excerpt}
              </p>
              <button className="text-brand-secondary font-bold hover:underline">
                Read Full Story
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Stories;