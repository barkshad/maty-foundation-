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
    { name: 'Get Involved', path: PageRoute.GET_INVOLVED },
    { name: 'Stories', path: PageRoute.STORIES },
    { name: 'Gallery', path: PageRoute.GALLERY },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  const handleNav = (path: PageRoute) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNav(PageRoute.HOME)}
            >
              <div className="bg-brand-primary p-2 rounded-xl mr-3 shadow-lg shadow-blue-500/30">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-xl font-serif font-bold text-slate-800 tracking-tight">Mati Foundation</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    currentPage === link.path
                      ? 'text-brand-primary font-bold bg-blue-50'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-stone-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-stone-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-stone-100 hover:text-brand-primary"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Contact Buttons (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
        <a
          href={`https://wa.me/${CONTACT_INFO.rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-green-500/40 flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="white" className="text-white" />
        </a>

        <a
          href={`tel:${CONTACT_INFO.rawPhone}`}
          className="bg-brand-primary text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/40 flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Call Us"
        >
          <Phone size={28} fill="currentColor" />
        </a>
      </div>

      <ChatWidget />

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-brand-primary mr-2" fill="#1d4ed8" />
                <span className="text-xl font-serif font-bold text-white">Mati Foundation</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-slate-300">
                Connecting hearts, building minds, and strengthening communities.
              </p>
            </div>

            <div>
              <h3 className="text-brand-primary font-bold mb-4 uppercase text-xs tracking-widest">Explore</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => handleNav(PageRoute.ABOUT)} className="hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => handleNav(PageRoute.PROGRAMS)} className="hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => handleNav(PageRoute.GET_INVOLVED)} className="hover:text-white transition-colors">Donate Items</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-primary font-bold mb-4 uppercase text-xs tracking-widest">Visit Us</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>{CONTACT_INFO.address}</li>
                <li>
                  <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:text-white transition-colors">{CONTACT_INFO.displayPhone}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-primary font-bold mb-4 uppercase text-xs tracking-widest">Stay Updated</h3>
              <div className="flex bg-slate-700 rounded-lg p-1">
                <input
                  type="email"
                  placeholder="Email..."
                  className="bg-transparent text-white px-4 py-2 w-full focus:outline-none placeholder-slate-400 text-sm"
                />
                <button className="bg-brand-primary px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition-colors text-sm">
                  Go
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
