import React from 'react';
import { Database, Server, Layout, Shield } from 'lucide-react';

const AdminPlan: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">Internal Documentation</div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Website Plan & Workflows</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            This section outlines the technical architecture, user workflows, and administrative processes designed for the Mati Foundation web application.
          </p>
        </div>

        {/* Workflows */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Visitor Workflow */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-stone-200">
            <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center mr-3 text-sm">1</span>
              Visitor Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="font-bold text-stone-700 w-24">Explore</span>
                <span className="text-stone-500 text-sm">Lands on Home → Views Impact Stats → Reads About Page</span>
              </div>
              <div className="flex justify-center"><div className="h-4 w-0.5 bg-stone-300"></div></div>
              <div className="flex items-center p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="font-bold text-stone-700 w-24">Engage</span>
                <span className="text-stone-500 text-sm">Browses Programs → Reads Success Stories → Uses Chatbot</span>
              </div>
              <div className="flex justify-center"><div className="h-4 w-0.5 bg-stone-300"></div></div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="font-bold text-green-700 w-24">Act</span>
                <span className="text-green-800 text-sm">Clicks "Donate" or "Volunteer" → Submits Form → Receives Email</span>
              </div>
            </div>
          </div>

          {/* Admin Workflow */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-stone-200">
            <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
               <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center mr-3 text-sm">2</span>
              Admin Management
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="font-bold text-stone-700 w-24">Login</span>
                <span className="text-stone-500 text-sm">Secure Auth (OAuth/Email) → Dashboard Access</span>
              </div>
               <div className="flex justify-center"><div className="h-4 w-0.5 bg-stone-300"></div></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm">
                  <span className="block font-bold text-stone-700 mb-1">Volunteers</span>
                  Review Apps → Approve/Deny → Assign Role
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm">
                  <span className="block font-bold text-stone-700 mb-1">Donations</span>
                  Track Payments → Send Tax Receipts → Export Reports
                </div>
              </div>
               <div className="flex justify-center"><div className="h-4 w-0.5 bg-stone-300"></div></div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="font-bold text-blue-700 w-24">Content</span>
                <span className="text-blue-800 text-sm">Upload Gallery Photos → Post Stories → Update Program Stats</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-bold font-serif text-stone-900 mb-8 text-center">Recommended Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 text-center hover:shadow-lg transition-shadow">
            <Layout className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h3 className="font-bold text-stone-800 mb-2">Frontend</h3>
            <p className="text-sm text-stone-600">React (TypeScript)</p>
            <p className="text-sm text-stone-600">Tailwind CSS</p>
            <p className="text-sm text-stone-600">Vite</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-stone-200 text-center hover:shadow-lg transition-shadow">
            <Server className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h3 className="font-bold text-stone-800 mb-2">Backend</h3>
            <p className="text-sm text-stone-600">Node.js / Express</p>
            <p className="text-sm text-stone-600">Supabase (Auth + DB)</p>
            <p className="text-sm text-stone-600">Gemini API (AI)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-stone-200 text-center hover:shadow-lg transition-shadow">
            <Database className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-stone-800 mb-2">Data</h3>
            <p className="text-sm text-stone-600">PostgreSQL</p>
            <p className="text-sm text-stone-600">AWS S3 (Images)</p>
            <p className="text-sm text-stone-600">Stripe (Payments)</p>
          </div>
           <div className="bg-white p-6 rounded-xl border border-stone-200 text-center hover:shadow-lg transition-shadow">
            <Shield className="w-10 h-10 text-stone-700 mx-auto mb-4" />
            <h3 className="font-bold text-stone-800 mb-2">Hosting</h3>
            <p className="text-sm text-stone-600">Vercel (Frontend)</p>
            <p className="text-sm text-stone-600">Railway (Backend)</p>
            <p className="text-sm text-stone-600">Cloudflare (DNS)</p>
          </div>
        </div>

        {/* Database Schema Idea */}
        <div className="mt-20 bg-stone-900 text-stone-300 p-8 rounded-2xl font-mono text-sm overflow-x-auto">
          <h3 className="text-white font-bold mb-4 text-lg border-b border-stone-700 pb-2">Proposed Database Schema (Snippet)</h3>
          <pre>
{`Table: Users
- id (uuid)
- email (string)
- role (admin | donor | volunteer)

Table: Donations
- id (uuid)
- user_id (fk)
- amount (decimal)
- currency (string)
- status (pending | completed)
- created_at (timestamp)

Table: Volunteers
- id (uuid)
- name (string)
- skills (array)
- status (applied | vetted | active)

Table: Stories
- id (uuid)
- title (string)
- content (text)
- image_url (string)
- published (boolean)`}
          </pre>
        </div>

      </div>
    </div>
  );
};

export default AdminPlan;