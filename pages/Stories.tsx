import React from 'react';
import { STORIES } from '../constants';
import { Calendar, User } from 'lucide-react';

const Stories: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Moments of Joy</h1>
        <p className="text-slate-600">Stories from our community to yours.</p>
      </div>
      
      <div className="grid gap-12">
        {STORIES.map((story) => (
          <article
            key={story.id}
            className="bg-white p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-start shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:w-1/3 w-full h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="md:w-2/3 py-2">
              <div className="flex items-center space-x-4 text-xs font-bold tracking-wider text-slate-500 mb-4 uppercase">
                <span className="flex items-center"><Calendar size={14} className="mr-1"/> {story.date}</span>
                <span className="flex items-center text-brand-primary"><User size={14} className="mr-1"/> {story.author}</span>
              </div>
              <h2 className="text-3xl font-bold font-serif text-slate-800 mb-4 hover:text-brand-primary transition-colors cursor-pointer">
                {story.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {story.excerpt}
              </p>
              <button className="text-brand-primary font-bold hover:underline text-sm border-2 border-brand-primary px-6 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-all">
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