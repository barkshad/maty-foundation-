
import React, { useState, useEffect } from 'react';
import { useContent } from '../../contexts/ContentContext';
import { useAuth } from '../../contexts/AuthContext';
import { PageRoute } from '../../types';
import ImageUploader from '../../components/ImageUploader';
import { LogOut, Home, Image as ImageIcon, Phone, Save, Trash2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard: React.FC<{ navigate: (page: PageRoute) => void }> = ({ navigate }) => {
  const { content, updateHero, updateContact, addGalleryItem, deleteGalleryItem } = useContent();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'contact'>('home');
  const [saved, setSaved] = useState(false);

  // Local state for forms
  const [heroForm, setHeroForm] = useState(content.hero);
  // Using content.company mapped to contact in the context
  const [contactForm, setContactForm] = useState(content.company);

  // Sync local state when content loads from cloud
  useEffect(() => {
    setHeroForm(content.hero);
    setContactForm(content.company);
  }, [content]);

  const handleLogout = async () => {
    await logout();
    navigate(PageRoute.HOME);
  };

  const handleSaveHero = () => {
    updateHero(heroForm);
    showSaveIndicator();
  };

  const handleSaveContact = () => {
    // Pass as company structure
    updateContact(contactForm);
    showSaveIndicator();
  };

  const showSaveIndicator = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="bg-white w-full md:w-64 border-r border-slate-200 flex-shrink-0 z-20">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-blue-900">Mati Admin</h2>
          <p className="text-xs text-slate-500 mt-1">Cloud CMS</p>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('home')}
            className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Home size={18} className="mr-3" /> Homepage
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'gallery' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <ImageIcon size={18} className="mr-3" /> Gallery Manager
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Phone size={18} className="mr-3" /> Contact Info
          </button>
        </nav>
        <div className="p-4 mt-auto border-t border-slate-100">
           <button 
             onClick={() => navigate(PageRoute.HOME)}
             className="w-full flex items-center p-3 text-slate-500 hover:text-blue-600 text-sm"
           >
             <Globe size={18} className="mr-3" /> View Live Site
           </button>
           <button 
             onClick={handleLogout}
             className="w-full flex items-center p-3 text-red-500 hover:bg-red-50 rounded-lg text-sm mt-2"
           >
             <LogOut size={18} className="mr-3" /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 capitalize">{activeTab} Editor</h1>
            <p className="text-slate-500 text-sm">Make changes to the live website</p>
          </div>
          <AnimatePresence>
            {saved && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center"
              >
                <Save size={16} className="mr-2" /> Changes Saved!
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* HOME EDITOR */}
        {activeTab === 'home' && (
          <div className="space-y-8 max-w-3xl">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg mb-6 border-b pb-4">Hero Section</h3>
              
              <ImageUploader 
                label="Hero Background Image" 
                currentImage={heroForm.image}
                onUpload={(url) => setHeroForm({...heroForm, image: url})}
              />

              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Headline</label>
                  <input 
                    type="text" 
                    value={heroForm.headline}
                    onChange={(e) => setHeroForm({...heroForm, headline: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Subheadline</label>
                  <textarea 
                    value={heroForm.subheadline}
                    onChange={(e) => setHeroForm({...heroForm, subheadline: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button onClick={handleSaveHero} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY EDITOR */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
               <h3 className="font-bold text-lg mb-4">Add New Image</h3>
               <div className="flex flex-col md:flex-row gap-4 items-end">
                 <div className="flex-1">
                   <ImageUploader 
                     label="Upload Photo" 
                     onUpload={(url) => {
                        const newItem = {
                          cat: 'all' as const,
                          url: url,
                          caption: 'New Upload'
                        };
                        addGalleryItem(newItem);
                        showSaveIndicator();
                     }} 
                   />
                 </div>
               </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.gallery.map((item) => (
                  <div key={item.id} className="relative group rounded-lg overflow-hidden shadow-sm border bg-white">
                    <img src={item.url} alt={item.caption} className="w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => {
                          if(confirm("Delete this image?")) deleteGalleryItem(item.id);
                        }}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="p-2 text-xs truncate font-medium text-slate-600 bg-white">
                      {item.caption}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* CONTACT EDITOR */}
        {activeTab === 'contact' && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-2xl">
            <h3 className="font-bold text-lg mb-6 border-b pb-4">Contact Details</h3>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700">Phone Number</label>
                <input 
                  type="text" 
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700">Physical Address</label>
                <input 
                  type="text" 
                  value={contactForm.address}
                  onChange={(e) => setContactForm({...contactForm, address: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button onClick={handleSaveContact} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Save Contact Info
                </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
