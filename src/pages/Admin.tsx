
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useData } from '../contexts/ContentContext';
import { PageRoute } from '../types';
import AdminLogin from './AdminLogin'; // Reusing existing login UI but creating wrapper logic here
import AdminLayout from '../components/Admin/AdminLayout';
import PagesEditor from '../components/Admin/PagesEditor';
import { Save, Loader, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder components for other tabs to keep file size manageable
const PlaceholderTab = ({ name }: { name: string }) => (
    <div className="p-12 text-center text-slate-400 bg-white rounded-xl border border-dashed border-slate-300">
        <h3 className="text-xl font-bold mb-2">{name} Manager</h3>
        <p>This module is under construction in the V2 rollout.</p>
    </div>
);

const Admin: React.FC<{ navigate: (page: PageRoute) => void }> = ({ navigate }) => {
  const { user, loading: authLoading } = useAuth();
  const { state, loading: dataLoading, saveToCloud, updateSection, syncLocalData } = useData();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (authLoading || dataLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader className="animate-spin text-blue-600" /></div>;
  }

  if (!user) {
    return <AdminLogin navigate={navigate} />; // This component handles the login logic internally using useAuth now
  }

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    try {
        await saveToCloud(state, `UPDATED_${activeTab.toUpperCase()}`);
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
        setSaveStatus('error');
    } finally {
        setIsSaving(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
        case 'dashboard':
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Live Status</h3>
                        <div className="flex items-center text-green-600 font-bold text-xl">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Online
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Total Programs</h3>
                        <div className="text-3xl font-bold text-slate-800">{state.programs.length}</div>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Maintenance Mode</h3>
                        <div className="text-xl font-bold text-slate-800">{state.maintenanceMode ? 'On' : 'Off'}</div>
                    </div>
                </div>
            );
        case 'pages':
            return <PagesEditor state={state} updateSection={updateSection} />;
        case 'settings':
             return (
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-xl">
                     <h3 className="font-bold text-lg mb-4">Emergency Zone</h3>
                     <p className="text-sm text-slate-600 mb-6">If the live data is corrupted, you can force a hard reset using the local constants file.</p>
                     <button 
                        onClick={() => { if(confirm("Are you sure? This overwrites all Cloud data.")) syncLocalData(); }}
                        className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-100 flex items-center"
                     >
                         <AlertTriangle size={16} className="mr-2" /> Hard Reset to Local Defaults
                     </button>
                 </div>
             );
        default:
            return <PlaceholderTab name={activeTab} />;
    }
  };

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab} navigate={navigate}>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 capitalize">{activeTab} Manager</h1>
          <p className="text-slate-500 text-sm">Manage your website content</p>
        </div>
        <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center px-6 py-2.5 rounded-lg font-bold text-white shadow-lg transition-all ${
                saveStatus === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl'
            }`}
        >
            {isSaving ? <Loader className="animate-spin mr-2" size={18} /> : 
             saveStatus === 'success' ? <CheckCircle className="mr-2" size={18} /> :
             <Save className="mr-2" size={18} />}
            {saveStatus === 'success' ? 'Saved!' : 'Save Changes'}
        </button>
      </header>
      
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
          {renderContent()}
      </motion.div>
    </AdminLayout>
  );
};

export default Admin;
