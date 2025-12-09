import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Heart, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen flex flex-col font-sans relative bg-white">
      <nav className="sticky top-0 w-full z-50 bg-white border-b" style={{ borderColor: 'var(--border-color)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => handleNav(PageRoute.HOME)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-2 rounded-xl mr-3" style={{ backgroundColor: 'var(--primary-blue)'}}>
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-xl font-serif font-bold tracking-tight" style={{ color: 'var(--accent-blue)'}}>Mati Foundation</span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative`}
                  style={{ color: currentPage === link.path ? 'var(--primary-blue)' : 'var(--text-light)'}}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {currentPage === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{backgroundColor: 'var(--primary-blue)'}}
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" style={{ color: 'var(--text-light)'}}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden border-t" style={{ borderColor: 'var(--border-color)'}}>
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100"
                  style={{ color: 'var(--text-main)' }}
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
        <motion.a
          href={`https://wa.me/${CONTACT_INFO.rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--primary-blue)' }}
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <MessageCircle size={28} fill="white" className="text-white" />
        </motion.a>

        <motion.a
          href={`tel:${CONTACT_INFO.rawPhone}`}
          className="text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--primary-blue)' }}
          aria-label="Call Us"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Phone size={28} fill="currentColor" />
        </motion.a>
      </div>

      <ChatWidget />

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--secondary-blue)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 mr-2" fill="var(--primary-blue)" style={{ color: 'var(--primary-blue)' }}/>
                <span className="text-xl font-serif font-bold" style={{ color: 'var(--accent-blue)' }}>Mati Foundation</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>
                Connecting hearts, building minds, and strengthening communities.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: 'var(--accent-blue)' }}>Explore</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-light)' }}>
                <li><button onClick={() => handleNav(PageRoute.ABOUT)} className="hover:underline">Our Story</button></li>
                <li><button onClick={() => handleNav(PageRoute.PROGRAMS)} className="hover:underline">Programs</button></li>
                <li><button onClick={() => handleNav(PageRoute.GET_INVOLVED)} className="hover:underline">Donate Items</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: 'var(--accent-blue)' }}>Visit Us</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-light)' }}>
                <li>{CONTACT_INFO.address}</li>
                <li>
                  <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:underline">{CONTACT_INFO.displayPhone}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: 'var(--accent-blue)' }}>Stay Updated</h3>
              <div className="flex bg-white rounded-lg p-1 border" style={{ borderColor: 'var(--border-color)' }}>
                <input
                  type="email"
                  placeholder="Email..."
                  className="bg-transparent px-4 py-2 w-full focus:outline-none text-sm"
                />
                <button className="btn-primary text-sm px-4 py-2">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center text-xs" style={{ borderColor: 'rgba(0,0,0,0.1)', color: 'var(--text-light)' }}>
            <p>&copy; {new Date().getFullYear()} Mati Foundation. Built with 💙 by Matilda Kashindo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;