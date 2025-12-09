import React from 'react';
import { PROGRAMS } from '../constants';
import { PageRoute } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs: React.FC<{ navigate: (page: PageRoute) => void; }> = ({ navigate }) => {
  return (
    <div className="min-h-screen pb-24 pt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Core Programs</h1>
        <p className="text-lg text-slate-600">A holistic approach to nurture, educate, and empower every child.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-24">
        {PROGRAMS.map((program, idx) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className={`bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden flex flex-col shadow-xl ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4 text-brand-primary">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="font-bold uppercase tracking-widest text-xs">Our Focus</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">{program.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-white/20 p-4 rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate(PageRoute.GET_INVOLVED)}
                className="self-start bg-brand-accent text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors text-sm font-bold flex items-center shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Support This Program <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;