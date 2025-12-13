
import React from 'react';
import { PROGRAMS } from '../constants';
import { PageRoute } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedText from '../components/AnimatedText';

const Programs: React.FC<{ navigate: (page: PageRoute) => void; }> = ({ navigate }) => {
  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <div className="relative pt-32 pb-32 px-4 text-center text-white overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1470" alt="Education session" className="w-full h-full object-cover opacity-60"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative z-10 max-w-4xl mx-auto"
        >
            <AnimatedText text="Our Core Programs" className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg" />
            <p className="text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">A holistic approach to nurture, educate, and empower every child.</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 px-4 -mt-20 relative z-20">
        {PROGRAMS.map((program, idx) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className={`bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-xl shadow-slate-200/50 border border-slate-100 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden group">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-transparent"></div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <span className="p-2 bg-teal-50 text-teal-700 rounded-lg mr-3"><Sparkles size={18}/></span>
                <span className="font-bold uppercase tracking-widest text-xs text-teal-600">Key Initiative</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-800">{program.title}</h2>
              <p className="mb-10 leading-relaxed text-lg text-slate-600 font-light">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-3xl font-bold text-teal-600 mb-1">
                      <AnimatedCounter to={parseInt(stat.value)} />{stat.value.replace(/[0-9]/g, '')}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate(PageRoute.GET_INVOLVED)}
                className="self-start px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center hover:bg-teal-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
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
