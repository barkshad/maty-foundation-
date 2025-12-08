import React, { useState } from 'react';
import { Check, Heart } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');
  const [amount, setAmount] = useState<string>('50');

  return (
    <div className="min-h-screen py-16 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">Make a Difference</h1>
          <p className="text-slate-600">Your support changes lives. Choose how you want to help.</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm border border-stone-200 inline-flex">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-8 py-2 rounded-full font-bold transition-colors ${
                activeTab === 'donate' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-8 py-2 rounded-full font-bold transition-colors ${
                activeTab === 'volunteer' ? 'bg-brand-secondary text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100">
            {activeTab === 'donate' && (
              <div className="p-8 md:p-12 animate-in fade-in duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-2 rounded-full mr-4">
                    <Heart className="text-brand-primary" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Support a Child Today</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['25', '50', '100'].map((amt) => (
                    <button 
                      key={amt} 
                      onClick={() => setAmount(amt)}
                      className={`py-3 rounded-lg font-bold text-lg transition-colors border-2 ${
                        amount === amt 
                        ? 'border-brand-primary bg-blue-50 text-brand-primary' 
                        : 'border-slate-100 text-slate-500 hover:border-brand-primary'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-500 font-bold">$</span>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-7 pr-4 py-3 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" 
                      placeholder="0.00" 
                    />
                  </div>
                </div>
                
                <div className="bg-stone-50 p-4 rounded-lg mb-8 flex items-start border border-stone-200">
                   <div className="mr-3 mt-1"><Check size={16} className="text-brand-primary" /></div>
                   <div>
                     <h3 className="font-bold text-sm text-brand-primary mb-1">Your Impact</h3>
                     <p className="text-sm text-slate-600">
                       <strong className="text-slate-900">${amount}</strong> helps provide essential school supplies, nutritious meals, and medical checkups for children in need.
                     </p>
                   </div>
                </div>

                <button className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md">
                  Process Secure Donation
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">Secure payment powered by MockStripe. All donations are tax-deductible.</p>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="p-8 md:p-12 animate-in fade-in duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Join Our Team</h2>
                <p className="mb-8 text-slate-600">We need tutors, mentors, and event organizers. Fill out the form below to get started.</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-2 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-secondary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-secondary outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-secondary outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Area of Interest</label>
                    <select className="w-full px-4 py-2 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-secondary outline-none">
                      <option>Tutoring / Education</option>
                      <option>Medical / Health</option>
                      <option>Events / Fundraising</option>
                      <option>General Help</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Why do you want to volunteer?</label>
                    <textarea rows={4} className="w-full px-4 py-2 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-secondary outline-none"></textarea>
                  </div>

                  <button className="w-full bg-brand-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-teal-800 transition-colors shadow-md">
                    Submit Application
                  </button>
                </form>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;