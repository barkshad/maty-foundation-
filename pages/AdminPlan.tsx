import React from 'react';
import { Database, Server, Layout, Shield, Lock, CreditCard, Users, FileText } from 'lucide-react';

const AdminPlan: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div 
          className="text-center mb-16 py-16 rounded-2xl relative overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470" alt="Admin Dashboard" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/20 text-white">Internal Documentation</div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">System Architecture & Workflows</h1>
            <p className="max-w-2xl mx-auto text-blue-200">
              A blueprint for the secure, scalable, and modern digital infrastructure of Mati Foundation.
            </p>
          </div>
        </div>

        {/* Dashboard Simulation */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
           {/* Column 1: Public Flow */}
           <div className="relative bg-white p-6 rounded-xl shadow-lg border overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
              <img src="https://images.unsplash.com/photo-1557853194-27230455d35a?auto=format&fit=crop&q=80&w=800" alt="User flow" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Layout size={20} className="mr-2" style={{ color: 'var(--primary-blue)'}}/>
                    Public Interface
                </h3>
                <ul className="space-y-3">
                    <li className="p-3 rounded-lg text-sm flex items-center" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                    Visitor lands on Home
                    </li>
                    <li className="p-3 rounded-lg text-sm flex items-center" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                    Interacts with Chatbot (Gemini AI)
                    </li>
                    <li className="p-3 rounded-lg text-sm flex items-center" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--primary-blue)'}}></div>
                    Submits Donation
                    </li>
                </ul>
              </div>
           </div>

           {/* Column 2: Admin Panel */}
           <div className="relative p-6 rounded-xl shadow-xl border overflow-hidden" style={{ backgroundColor: 'var(--accent-blue)', color: 'var(--white)', borderColor: 'var(--border-color)'}}>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1484" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Lock size={20} className="mr-2 text-blue-300"/>
                    Admin Dashboard
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                    <Users size={20} className="mx-auto mb-1 text-blue-200"/>
                    <span className="text-[10px] font-bold uppercase text-blue-300">Volunteers</span>
                    <div className="text-lg font-bold text-white">12 Pending</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                    <CreditCard size={20} className="mx-auto mb-1 text-blue-200"/>
                    <span className="text-[10px] font-bold uppercase text-blue-300">Donations</span>
                    <div className="text-lg font-bold text-white">$1,250</div>
                    </div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-xs flex items-center text-blue-200">
                    <FileText size={16} className="mr-2 text-blue-300"/>
                    Recent Story Draft: "Summer Camp..."
                </div>
              </div>
           </div>

           {/* Column 3: Backend */}
           <div className="relative bg-white p-6 rounded-xl shadow-lg border overflow-hidden" style={{ borderColor: 'var(--border-color)'}}>
              <img src="https://images.unsplash.com/photo-1593431087196-76c243899645?auto=format&fit=crop&q=80&w=800" alt="Server infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Server size={20} className="mr-2" style={{ color: 'var(--primary-blue)'}}/>
                    Infrastructure
                </h3>
                <ul className="space-y-3">
                    <li className="p-3 rounded-lg text-sm flex items-center justify-between" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <span>Frontend Hosting</span>
                    <span className="font-mono text-xs bg-gray-800 text-white px-2 py-0.5 rounded">Vercel</span>
                    </li>
                    <li className="p-3 rounded-lg text-sm flex items-center justify-between" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <span>Database & Auth</span>
                    <span className="font-mono text-xs text-white px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--primary-blue)'}}>Supabase</span>
                    </li>
                    <li className="p-3 rounded-lg text-sm flex items-center justify-between" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <span>AI Logic</span>
                    <span className="font-mono text-xs text-white px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--primary-blue)'}}>Gemini</span>
                    </li>
                    <li className="p-3 rounded-lg text-sm flex items-center justify-between" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                    <span>Media Storage</span>
                    <span className="font-mono text-xs bg-gray-800 text-white px-2 py-0.5 rounded">Cloudinary</span>
                    </li>
                </ul>
              </div>
           </div>
        </div>

        {/* Database Schema Idea */}
        <div className="relative p-8 rounded-xl font-mono text-sm shadow-lg overflow-hidden border" style={{ backgroundColor: 'var(--secondary-blue)', borderColor: 'var(--border-color)'}}>
          <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="schema background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative z-10">
            <h3 className="font-bold mb-4 text-base pb-2 border-b flex items-center" style={{ borderColor: 'var(--border-color)'}}><Database className="mr-2 w-4 h-4" style={{ color: 'var(--primary-blue)'}}/> Database Schema</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <p className="mb-2" style={{ color: 'var(--primary-blue)'}}>// Users Table</p>
                <pre className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-main)'}}>
{`id: uuid (pk)
email: string
role: 'admin' | 'donor'
created_at: timestamp`}
                </pre>
                </div>
                <div>
                <p className="mb-2" style={{ color: 'var(--primary-blue)'}}>// Donations Table</p>
                <pre className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-main)'}}>
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
    </div>
  );
};

export default AdminPlan;
