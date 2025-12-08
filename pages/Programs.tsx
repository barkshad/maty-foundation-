import React from 'react';
import { PROGRAMS } from '../constants';
import { PageRoute } from '../types';

interface ProgramsProps {
    navigate: (page: PageRoute) => void;
}

const Programs: React.FC<ProgramsProps> = ({navigate}) => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-brand-secondary text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Our Programs</h1>
        <p className="text-stone-200 text-lg">Holistic approaches to complex challenges.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 space-y-12">
        {PROGRAMS.map((program, idx) => (
          <div key={program.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">{program.title}</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-stone-100 py-6">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate(PageRoute.GET_INVOLVED)}
                className="self-start bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-brand-primary transition-colors text-sm font-medium"
              >
                Support This Program
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;