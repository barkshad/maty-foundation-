import React, { useState } from 'react';

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Make a Difference</h1>
          <p className="text-stone-600">Your support changes lives. Choose how you want to help.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-sm border border-stone-200 inline-flex">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'donate' ? 'bg-brand-primary text-white shadow-md' : 'text-stone-600 hover:text-brand-primary'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'volunteer' ? 'bg-brand-secondary text-white shadow-md' : 'text-stone-600 hover:text-brand-secondary'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
          
          {activeTab === 'donate' && (
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-stone-800">Support a Child Today</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['$25', '$50', '$100'].map((amt) => (
                  <button key={amt} className="border-2 border-stone-200 py-4 rounded-xl font-bold text-xl hover:border-brand-primary hover:text-brand-primary focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all">
                    {amt}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-stone-700 mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-stone-500">$</span>
                  <input type="number" className="w-full pl-8 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" placeholder="0.00" />
                </div>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-sm text-stone-800 mb-2">Impact Visualizer</h3>
                <p className="text-sm text-stone-600 italic">
                  $50 provides school supplies for one child for a whole year.
                </p>
              </div>

              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg">
                Process Secure Donation
              </button>
              <p className="text-center text-xs text-stone-400 mt-4">Secure payment powered by MockStripe. All donations are tax-deductible.</p>
            </div>
          )}

          {activeTab === 'volunteer' && (
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-stone-800">Join Our Team</h2>
              <p className="mb-8 text-stone-600">We need tutors, mentors, and event organizers. Fill out the form below to get started.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-secondary" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-secondary" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Area of Interest</label>
                  <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-secondary bg-white">
                    <option>Tutoring / Education</option>
                    <option>Medical / Health</option>
                    <option>Events / Fundraising</option>
                    <option>General Help</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Why do you want to volunteer?</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-secondary"></textarea>
                </div>

                <button className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-800 transition-colors shadow-lg">
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