
import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Heart, Phone, MessageCircle, Lock, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWidget from './ChatWidget';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About', path: PageRoute.ABOUT },
    { name: 'Programs', path: PageRoute.PROGRAMS },
    { name: 'Sponsor', path: PageRoute.SPONSORSHIP },
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
    <div className="min-h-screen flex flex-col font-sans relative bg-slate-50">
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'glass-nav shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => handleNav(PageRoute.HOME)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-2 rounded-xl mr-3 bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div>
                <span className={`block text-xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                  Mati Foundation
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => {
                const isActive = currentPage === link.path;
                const textColor = isScrolled 
                    ? (isActive ? 'text-teal-700' : 'text-slate-600 hover:text-teal-600') 
                    : (isActive ? 'text-white' : 'text-white/80 hover:text-white');
                
                return (
                    <motion.button
                    key={link.name}
                    onClick={() => handleNav(link.path)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all relative ${textColor}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    {link.name}
                    {isActive && (
                        <motion.div
                        className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full ${isScrolled ? 'bg-teal-600' : 'bg-white'}`}
                        layoutId="underline"
                        />
                    )}
                    </motion.button>
                )
              })}
              <motion.button
                onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                className={`ml-4 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all ${
                    isScrolled 
                        ? 'bg-teal-600 text-white hover:bg-teal-700' 
                        : 'bg-white text-teal-800 hover:bg-teal-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl overflow-hidden"
            >
                <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                    <button
                    key={link.name}
                    onClick={() => handleNav(link.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        currentPage === link.path 
                            ? 'bg-teal-50 text-teal-700 font-bold' 
                            : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    >
                    {link.name}
                    </button>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100">
                     <button
                        onClick={() => handleNav(PageRoute.GET_INVOLVED)}
                        className="w-full bg-teal-600 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-95 transition-transform"
                     >
                        Donate Now
                     </button>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Contact Buttons (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-4">
        <motion.a
          href={`https://wa.me/${CONTACT_INFO.rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-green-900/20 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm hover:bg-[#20bd5a]"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <MessageCircle size={24} fill="white" className="text-white" />
        </motion.a>

        <motion.a
          href={`tel:${CONTACT_INFO.rawPhone}`}
          className="bg-blue-600 text-white p-3.5 rounded-full shadow-lg shadow-blue-900/20 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm hover:bg-blue-700"
          aria-label="Call Us"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Phone size={24} fill="currentColor" />
        </motion.a>
      </div>

      <ChatWidget />

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-amber-500 to-teal-500 opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="p-1.5 bg-teal-600 rounded-lg mr-2">
                    <Heart className="h-5 w-5 text-white" fill="white"/>
                </div>
                <span className="text-2xl font-serif font-bold text-white tracking-wide">Mati Foundation</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Connecting hearts, building minds, and strengthening communities across Kenya. Join us in creating a future where every child thrives.
              </p>
              <div className="flex space-x-3">
                 {/* Social Icons Placeholder */}
                 <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 transition-colors text-slate-300 hover:text-white"><Instagram size={18}/></a>
                 <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-slate-300 hover:text-white"><Facebook size={18}/></a>
                 <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sky-500 transition-colors text-slate-300 hover:text-white"><Twitter size={18}/></a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-teal-400">Navigation</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><button onClick={() => handleNav(PageRoute.ABOUT)} className="hover:text-white hover:translate-x-1 transition-all">Our Story</button></li>
                <li><button onClick={() => handleNav(PageRoute.PROGRAMS)} className="hover:text-white hover:translate-x-1 transition-all">Programs</button></li>
                <li><button onClick={() => handleNav(PageRoute.SPONSORSHIP)} className="hover:text-white hover:translate-x-1 transition-all">Sponsor a Child</button></li>
                <li><button onClick={() => handleNav(PageRoute.STORIES)} className="hover:text-white hover:translate-x-1 transition-all">Impact Stories</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-teal-400">Contact</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                    <div className="mt-1 mr-3 text-teal-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
                    <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center">
                    <div className="mr-3 text-teal-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                    <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:text-white">{CONTACT_INFO.displayPhone}</a>
                </li>
                <li className="flex items-center">
                    <div className="mr-3 text-teal-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-teal-400">Newsletter</h3>
              <p className="text-xs text-slate-400 mb-4">Subscribe for updates on our latest projects and impact.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
                <motion.button 
                  className="bg-teal-600 text-white text-sm font-bold px-4 py-3 rounded-lg hover:bg-teal-500 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Mati Foundation. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0 space-x-6">
                <button className="hover:text-slate-300">Privacy Policy</button>
                <button className="hover:text-slate-300">Terms of Service</button>
                <button 
                    onClick={() => handleNav(PageRoute.ADMIN)} 
                    className="flex items-center hover:text-teal-400 transition-colors"
                >
                    <Lock size={12} className="mr-1.5" />
                    Admin
                </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
