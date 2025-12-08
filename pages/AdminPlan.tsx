import React from 'react';
import { Database, Server, Layout, Shield, Lock, CreditCard, Users, FileText } from 'lucide-react';

const AdminPlan: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Internal Documentation</div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">System Architecture & Workflows</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A blueprint for the secure, scalable, and modern digital infrastructure of Mati Foundation.
          </p>
        </div>

        {/* Dashboard Simulation */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
           {/* Column 1: Public Flow */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Layout size={20} className="mr-2 text-blue-500"/>
                Public Interface
              </h3>
              <ul className="space-y-3">
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  Visitor lands on Home
                </li>
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  Interacts with Chatbot (Gemini AI)
                </li>
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  Submits Donation (Stripe/M-Pesa)
                </li>
              </ul>
           </div>

           {/* Column 2: Admin Panel */}
           <div className="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700 text-slate-200">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Lock size={20} className="mr-2 text-teal-400"/>
                Admin Dashboard
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-700 p-3 rounded-lg text-center">
                  <Users size={20} className="mx-auto mb-1 text-purple-400"/>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Volunteers</span>
                  <div className="text-lg font-bold text-white">12 Pending</div>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg text-center">
                  <CreditCard size={20} className="mx-auto mb-1 text-green-400"/>
                  <span className="text-[10px] font-bold uppercase text-slate-400">Donations</span>
                  <div className="text-lg font-bold text-white">$1,250</div>
                </div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg text-xs flex items-center text-slate-300">
                  <FileText size={16} className="mr-2 text-slate-500"/>
                  Recent Story Draft: "Summer Camp..."
              </div>
           </div>

           {/* Column 3: Backend */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Server size={20} className="mr-2 text-purple-500"/>
                Infrastructure
              </h3>
               <ul className="space-y-3">
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center justify-between">
                  <span>Frontend Hosting</span>
                  <span className="font-mono text-xs bg-black text-white px-2 py-0.5 rounded">Vercel</span>
                </li>
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center justify-between">
                  <span>Database & Auth</span>
                  <span className="font-mono text-xs bg-green-600 text-white px-2 py-0.5 rounded">Supabase</span>
                </li>
                <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center justify-between">
                  <span>AI Logic</span>
                  <span className="font-mono text-xs bg-blue-600 text-white px-2 py-0.5 rounded">Gemini</span>
                </li>
                 <li className="bg-stone-50 p-3 rounded-lg text-sm flex items-center justify-between">
                  <span>Media Storage</span>
                  <span className="font-mono text-xs bg-orange-600 text-white px-2 py-0.5 rounded">Cloudinary</span>
                </li>
              </ul>
           </div>
        </div>

        {/* Database Schema Idea */}
        <div className="bg-slate-900 text-slate-300 p-8 rounded-xl font-mono text-sm shadow-lg overflow-hidden border border-slate-800">
          <h3 className="text-white font-bold mb-4 text-base pb-2 border-b border-slate-700 flex items-center"><Database className="mr-2 w-4 h-4 text-blue-400"/> Database Schema</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-purple-400 mb-2">// Users Table</p>
              <pre className="text-xs leading-relaxed opacity-80">
{`id: uuid (pk)
email: string
role: 'admin' | 'donor'
created_at: timestamp`}
              </pre>
            </div>
            <div>
               <p className="text-green-400 mb-2">// Donations Table</p>
              <pre className="text-xs leading-relaxed opacity-80">
{`id: uuid (pk)
amount: decimal
currency: 'USD' | 'KES'
provider: 'stripe' | 'mpesa'
status: 'success' | 'pending'`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPlan;