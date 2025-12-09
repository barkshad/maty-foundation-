import React from 'react';
import { STORIES } from '../constants';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Stories: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Moments of Joy</h1>
        <p className="text-slate-600 text-lg">Stories from our community to yours.</p>
      </motion.div>
      
      <div className="grid gap-16">
        {STORIES.map((story, idx) => (
          <motion.article
            key={story.id}
            className="bg-white/30 backdrop-blur-lg border border-white/20 p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-start shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: idx * 0.2 }}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
          >
            <div className="md:w-1/3 w-full h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover" 
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
              <motion.button 
                className="text-brand-accent font-bold hover:underline text-sm border-2 border-brand-accent px-6 py-2 rounded-full hover:bg-brand-accent hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Story
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Stories;