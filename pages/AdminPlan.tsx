
import React, { useState } from 'react';
import { Database, Server, Layout, Shield, Lock, CreditCard, Users, FileText, Cloud, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageUploader from '../components/ImageUploader';

const AdminPlan: React.FC = () => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

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

        {/* Media Manager Demo */}
        <div className="mb-16 bg-slate-50 border rounded-2xl p-8 shadow-sm" style={{ borderColor: 'var(--border-color)'}}>
            <div className="flex items-center mb-6">
                <Cloud className="w-8 h-8 mr-3" style={{ color: 'var(--primary-blue)'}} />
                <div>
                    <h2 className="text-2xl font-bold">Media CDN Manager</h2>
                    <p className="text-sm text-gray-500">Test the new Cloudinary Widget integration.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h3 className="font-bold mb-4 text-slate-700">Upload Component Demo</h3>
                      <ImageUploader 
                        label="Test Media Upload"
                        currentImage={uploadedUrl || undefined}
                        onUpload={(url) => setUploadedUrl(url)}
                      />
                      <p className="text-xs text-slate-400 mt-4">
                        This component uses the Cloudinary Upload Widget to handle images and videos directly from the browser, bypassing our server limits.
                      </p>
                   </div>
                </div>

                <div className="bg-white border rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                    {uploadedUrl ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full"
                        >
                            <div className="text-green-600 font-bold mb-4 flex items-center justify-center">
                                <Check size={20} className="mr-2" /> Upload Successful!
                            </div>
                            
                            <div className="bg-gray-100 p-3 rounded-lg text-xs break-all text-gray-600 font-mono mb-4">
                                {uploadedUrl}
                            </div>
                            <a href={uploadedUrl} target="_blank" rel="noreferrer" className="text-blue-500 text-sm font-bold mt-2 inline-block hover:underline">Open in new tab</a>
                        </motion.div>
                    ) : (
                        <div className="text-gray-300">
                            <p>Upload a file to see the result URL here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Existing Dashboard Simulation */}
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

      </div>
    </div>
  );
};

export default AdminPlan;
