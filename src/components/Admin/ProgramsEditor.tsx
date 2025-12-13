
import React, { useState } from 'react';
import { Program } from '../../types';
import StableInput from './StableInput';
import ImageUploader from '../ImageUploader';
import { Plus, Trash2, ChevronDown, ChevronUp, BarChart } from 'lucide-react';

interface ProgramsEditorProps {
  programs: Program[];
  onUpdate: (programs: Program[]) => void;
}

const ProgramsEditor: React.FC<ProgramsEditorProps> = ({ programs, onUpdate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleProgramChange = (id: string, field: keyof Program, value: any) => {
    const updated = programs.map(p => p.id === id ? { ...p, [field]: value } : p);
    onUpdate(updated);
  };

  const handleStatChange = (progId: string, statIdx: number, field: 'label' | 'value', val: string) => {
    const updated = programs.map(p => {
      if (p.id === progId) {
        const newStats = [...p.stats];
        newStats[statIdx] = { ...newStats[statIdx], [field]: val };
        return { ...p, stats: newStats };
      }
      return p;
    });
    onUpdate(updated);
  };

  const addNewProgram = () => {
    const newProgram: Program = {
      id: `prog_${Date.now()}`,
      title: 'New Program',
      description: 'Program description goes here...',
      image: '',
      stats: [{ label: 'Metric', value: '0' }]
    };
    onUpdate([newProgram, ...programs]);
    setExpandedId(newProgram.id);
  };

  const deleteProgram = (id: string) => {
    if (confirm('Are you sure you want to delete this program?')) {
      onUpdate(programs.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div>
           <h2 className="font-bold text-slate-800">Programs List</h2>
           <p className="text-xs text-slate-500">Manage your educational and welfare initiatives</p>
        </div>
        <button 
          onClick={addNewProgram}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} className="mr-2" /> Add Program
        </button>
      </div>

      <div className="space-y-4">
        {programs.map((program) => (
          <div key={program.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
            <div 
              className="p-4 flex items-center justify-between cursor-pointer bg-slate-50 hover:bg-slate-100"
              onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
            >
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                    {program.image && <img src={program.image} alt="" className="w-full h-full object-cover" />}
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">{program.title}</h3>
                    <p className="text-xs text-slate-500">{program.stats.length} stats tracked</p>
                 </div>
              </div>
              <div className="flex items-center space-x-3">
                 <button 
                    onClick={(e) => { e.stopPropagation(); deleteProgram(program.id); }}
                    className="p-2 text-red-400 hover:bg-red-50 rounded-full transition-colors"
                 >
                    <Trash2 size={18} />
                 </button>
                 {expandedId === program.id ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
              </div>
            </div>

            {expandedId === program.id && (
              <div className="p-6 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <StableInput 
                        label="Program Title" 
                        value={program.title} 
                        onCommit={(v) => handleProgramChange(program.id, 'title', v)} 
                      />
                      <StableInput 
                        label="Description" 
                        textarea
                        value={program.description} 
                        onCommit={(v) => handleProgramChange(program.id, 'description', v)} 
                      />
                      <div className="pt-4">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Program Image</label>
                        <ImageUploader 
                           currentImage={program.image}
                           onUpload={(url) => handleProgramChange(program.id, 'image', url)}
                        />
                      </div>
                   </div>

                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 h-fit">
                      <div className="flex items-center mb-4 text-blue-800">
                         <BarChart size={18} className="mr-2" />
                         <h4 className="font-bold text-sm">Impact Statistics</h4>
                      </div>
                      <div className="space-y-3">
                        {program.stats.map((stat, idx) => (
                           <div key={idx} className="flex gap-2">
                              <div className="flex-grow">
                                <StableInput 
                                   placeholder="Label (e.g. Students)"
                                   value={stat.label}
                                   onCommit={(v) => handleStatChange(program.id, idx, 'label', v)}
                                   className="bg-white"
                                />
                              </div>
                              <div className="w-24">
                                <StableInput 
                                   placeholder="Value"
                                   value={stat.value}
                                   onCommit={(v) => handleStatChange(program.id, idx, 'value', v)}
                                   className="bg-white"
                                />
                              </div>
                           </div>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 mt-2">These stats appear on the public program cards.</p>
                   </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsEditor;
