import React from 'react';
import { PROGRAMS } from '../constants';
import { PageRoute } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProgramsProps {
    navigate: (page: PageRoute) => void;
}

const Programs: React.FC<ProgramsProps> = ({navigate}) => {
  return (
    <div className="min-h-screen pb-20 pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Core Programs</h1>
        <p className="text-lg text-slate-600">A holistic approach to nurture, educate, and empower every child.</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {PROGRAMS.map((program, idx) => (
          <div
            key={program.id}
            className={`bg-white rounded-3xl overflow-hidden flex flex-col shadow-xl ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
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
                  <div key={sIdx} className="bg-stone-100 p-4 rounded-xl border border-stone-200">
                    <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate(PageRoute.GET_INVOLVED)}
                className="self-start bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-brand-primary transition-colors text-sm font-bold flex items-center shadow-lg"
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
