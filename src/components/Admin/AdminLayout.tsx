
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PageRoute } from '../../types';
import { LogOut, Home, Layout, Image as ImageIcon, Phone, Settings, Globe, Shield, Users, Database } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: any) => void;
  navigate: (page: PageRoute) => void;
}

const SidebarItem = ({ icon: Icon, label, id, active, onClick }: any) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
      active === id 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    <Icon size={18} className="mr-3" /> {label}
  </button>
);

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activeTab, setActiveTab, navigate }) => {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-30 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-100 flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
             <Shield className="text-white w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800">Mati Admin</h2>
            <p className="text-xs text-slate-500">CMS v2.0</p>
          </div>
        </div>

        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 mt-2 px-3">Content</div>
          <SidebarItem icon={Home} label="Dashboard" id="dashboard" active={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={Layout} label="Pages Editor" id="pages" active={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={Users} label="Programs & Team" id="programs" active={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={ImageIcon} label="Media Library" id="media" active={activeTab} onClick={setActiveTab} />
          
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 mt-6 px-3">System</div>
          <SidebarItem icon={Phone} label="Inquiries" id="inquiries" active={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={Settings} label="Global Settings" id="settings" active={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={Database} label="Backups & Logs" id="audit" active={activeTab} onClick={setActiveTab} />
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs mr-3">
               {user?.email?.substring(0,2).toUpperCase()}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-slate-700 truncate">{user?.email}</p>
                <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
          <button onClick={() => navigate(PageRoute.HOME)} className="w-full flex items-center p-2 text-slate-500 hover:text-blue-600 text-xs font-bold mb-2">
             <Globe size={14} className="mr-2" /> View Live Site
          </button>
          <button onClick={logout} className="w-full flex items-center p-2 text-red-500 hover:text-red-700 text-xs font-bold">
             <LogOut size={14} className="mr-2" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
