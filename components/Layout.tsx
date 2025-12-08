import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Heart, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import ChatWidget from './ChatWidget';
import { CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About', path: PageRoute.ABOUT },
    { name: 'Programs', path: PageRoute.PROGRAMS },
    { name: 'Stories', path: PageRoute.STORIES },
    { name: 'Gallery', path: PageRoute.GALLERY },
    { name: 'Contact', path: PageRoute.CONTACT },
    { name: 'Plan & Admin', path: PageRoute.ADMIN_PLAN },
  ];

  const handleNav = (path: PageRoute) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => handleNav(PageRoute.HOME)}>
              <div className="bg-brand-primary p-2 rounded-lg mr-3">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-xl font-serif font-bold text-brand-dark tracking-tight">Mati Foundation</span>
                <span className="block text-[10px] text-brand-secondary font-bold tracking-widest uppercase">Hope • Education • Future</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === link.path 
                      ? 'text-brand-primary font-bold bg-blue-50' 
                      : 'text-slate-600 hover:text-brand-primary hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="ml-4">
                <button
                  onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                  className="bg-brand-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-stone-50 hover:text-brand-primary"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                 <button
                  onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                  className="w-full bg-brand-primary text-white px-5 py-3 rounded-md font-medium"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Contact Buttons (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="white" className="text-white" />
          <span className="absolute left-16 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </a>

        {/* Phone Call Button */}
        <a
          href={`tel:${CONTACT_INFO.rawPhone}`}
          className="bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          title="Call Us"
        >
          <Phone size={28} fill="currentColor" />
          <span className="absolute left-16 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Now
          </span>
        </a>
      </div>

      {/* Chat Widget (Bottom Right) */}
      <ChatWidget />

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-brand-primary mr-2" fill="#1d4ed8" />
                <span className="text-xl font-serif font-bold text-white">Mati Foundation</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Dedicated to empowering vulnerable children through education, holistic care, and community support.
              </p>
              <div className="flex items-center space-x-2 text-xs text-brand-primary font-semibold">
                <ShieldCheck size={14} />
                <span>Registered 501(c)(3)</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => handleNav(PageRoute.ABOUT)} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => handleNav(PageRoute.PROGRAMS)} className="hover:text-white transition-colors">Our Programs</button></li>
                <li><button onClick={() => handleNav(PageRoute.GET_INVOLVED)} className="hover:text-white transition-colors">Volunteer</button></li>
                <li><button onClick={() => handleNav(PageRoute.ADMIN_PLAN)} className="hover:text-white transition-colors">Admin Portal</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>{CONTACT_INFO.address}</li>
                <li>
                  <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:text-white transition-colors">{CONTACT_INFO.displayPhone}</a>
                </li>
                <li>
                   <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Newsletter</h3>
              <p className="text-xs mb-3">Join our community for updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <button className="bg-brand-primary px-4 py-2 rounded-r-md text-white font-medium hover:bg-blue-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Mati Foundation. Built with 💙 by Matilda Kashindo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;