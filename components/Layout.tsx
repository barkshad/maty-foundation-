import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Heart, ShieldCheck } from 'lucide-react';
import ChatWidget from './ChatWidget';

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
    { name: 'Plan & Workflow', path: PageRoute.ADMIN_PLAN }, // Added for the assignment requirements
  ];

  const handleNav = (path: PageRoute) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => handleNav(PageRoute.HOME)}>
              <div className="bg-brand-primary p-2 rounded-lg mr-3">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-xl font-serif font-bold text-stone-900 tracking-tight">Mati Foundation</span>
                <span className="block text-xs text-brand-secondary font-medium tracking-widest uppercase">Hope • Education • Future</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.path 
                      ? 'text-brand-primary font-bold' 
                      : 'text-stone-600 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                className="bg-brand-primary hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md transition-all transform hover:scale-105"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:bg-stone-100 hover:text-brand-primary"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                 <button
                  onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                  className="w-full bg-brand-primary text-white px-5 py-3 rounded-lg font-medium shadow-md"
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

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <footer className="bg-brand-dark text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-brand-primary mr-2" fill="#c2410c" />
                <span className="text-xl font-serif font-bold text-white">Mati Foundation</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Dedicated to empowering vulnerable children through education, holistic care, and community support.
              </p>
              <div className="flex items-center space-x-2 text-xs text-stone-400">
                <ShieldCheck size={14} />
                <span>Registered 501(c)(3) Non-profit</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => handleNav(PageRoute.ABOUT)} className="hover:text-brand-primary">About Us</button></li>
                <li><button onClick={() => handleNav(PageRoute.PROGRAMS)} className="hover:text-brand-primary">Our Programs</button></li>
                <li><button onClick={() => handleNav(PageRoute.GET_INVOLVED)} className="hover:text-brand-primary">Volunteer</button></li>
                <li><button onClick={() => handleNav(PageRoute.ADMIN_PLAN)} className="hover:text-brand-primary">Internal Plan (Demo)</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>123 Hope Lane</li>
                <li>Springfield, SP 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@matifoundation.org</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h3>
              <p className="text-xs mb-3">Join our community for updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-stone-800 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-brand-primary border border-stone-700"
                />
                <button className="bg-brand-primary px-4 py-2 rounded-r-md text-white font-medium hover:bg-orange-600">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Mati Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;