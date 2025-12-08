import React from 'react';
import { PROGRAMS } from '../constants';
import { PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProgramsProps {
    navigate: (page: PageRoute) => void;
}

const Programs: React.FC<ProgramsProps> = ({navigate}) => {
  return (
    <div className="min-h-screen pb-20 bg-stone-50">
      <div className="bg-brand-secondary text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Our Programs</h1>
        <p className="text-teal-100 text-lg">Holistic approaches to complex challenges.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
        {PROGRAMS.map((program, idx) => (
          <div 
            key={program.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">{program.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 bg-stone-50 p-6 rounded-lg">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate(PageRoute.GET_INVOLVED)}
                className="self-start bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-brand-primary transition-colors text-sm font-bold flex items-center"
              >
                Support This Program <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;