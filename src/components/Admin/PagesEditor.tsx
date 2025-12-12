
import React from 'react';
import { WebsiteState } from '../../types';
import StableInput from './StableInput';
import ImageUploader from '../ImageUploader';

interface PagesEditorProps {
  state: WebsiteState;
  updateSection: (section: any, data: any) => void;
}

const PagesEditor: React.FC<PagesEditorProps> = ({ state, updateSection }) => {
  const hero = state.hero;

  const handleHeroUpdate = (key: string, val: any) => {
    updateSection('hero', { ...hero, [key]: val });
  };

  return (
    <div className="max-w-4xl space-y-8">
      
      {/* Hero Section */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-700">Home Page Hero</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Visible</span>
        </div>
        <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <StableInput 
                        label="Headline" 
                        value={hero.headline} 
                        onCommit={(v) => handleHeroUpdate('headline', v)} 
                    />
                    <StableInput 
                        label="Subheadline" 
                        textarea
                        value={hero.subheadline} 
                        onCommit={(v) => handleHeroUpdate('subheadline', v)} 
                    />
                </div>
                <div>
                     <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Hero Background</label>
                     <ImageUploader 
                        currentImage={hero.image}
                        onUpload={(url) => handleHeroUpdate('image', url)}
                     />
                </div>
            </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-700">Impact Statistics</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {state.impactStats.map((stat, idx) => (
                <div key={idx} className="border p-4 rounded-lg bg-slate-50 relative">
                    <div className="absolute top-2 right-2 text-xs font-mono text-slate-400">#{idx + 1}</div>
                    <StableInput 
                        label="Label"
                        value={stat.label}
                        onCommit={(v) => {
                            const newStats = [...state.impactStats];
                            newStats[idx].label = v;
                            updateSection('impactStats', newStats);
                        }}
                    />
                    <div className="flex gap-2">
                        <StableInput 
                            label="Value"
                            type="number"
                            value={stat.value}
                            onCommit={(v) => {
                                const newStats = [...state.impactStats];
                                newStats[idx].value = parseInt(v);
                                updateSection('impactStats', newStats);
                            }}
                        />
                         <StableInput 
                            label="Suffix"
                            value={stat.suffix}
                            onCommit={(v) => {
                                const newStats = [...state.impactStats];
                                newStats[idx].suffix = v;
                                updateSection('impactStats', newStats);
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default PagesEditor;
