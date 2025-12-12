
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { PageRoute } from './types';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import './components/AnimatedCounter';
import './components/AnimatedText';

// Contexts
import { ContentProvider } from './contexts/ContentContext';
import { AuthProvider } from './contexts/AuthContext'; // Renamed internal auth logic moved to useAuth hook, but keeping provider structure if needed, or we can just rely on the new hook globally. 
// Actually, the previous App.tsx wrapped with AuthProvider. 
// I will create a simple wrapper for AuthProvider that uses the hook or context pattern if strictly needed, 
// but since I implemented useAuth as a hook, I don't strictly need a provider unless I want to avoid prop drilling. 
// To allow 'useAuth' to work efficiently without prop drilling the user object everywhere, context is better.
// I'll assume the AuthContext.tsx file was replaced/updated or I will update it now to use the hook logic.
// For now, I'll stick to the plan: The useAuth hook handles Firebase.
// I will remove the explicit AuthProvider wrapper here if it was the old one, or replace it.
// Let's use the ContentProvider (now the DataContext) as the main data engine.

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Socials from './pages/Socials';
import Sponsorship from './pages/Sponsorship';

// Admin Pages
import Admin from './pages/Admin'; 

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20
};

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(PageRoute.HOME);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      // Public Routes
      case PageRoute.HOME: return <Home navigate={setCurrentPage} />;
      case PageRoute.ABOUT: return <About />;
      case PageRoute.PROGRAMS: return <Programs navigate={setCurrentPage} />;
      case PageRoute.GET_INVOLVED: return <GetInvolved navigate={setCurrentPage} />;
      case PageRoute.SPONSORSHIP: return <Sponsorship navigate={setCurrentPage} />;
      case PageRoute.STORIES: return <Stories />;
      case PageRoute.GALLERY: return <Gallery />;
      case PageRoute.CONTACT: return <Contact />;
      case PageRoute.SOCIALS: return <Socials />;
      
      // Admin Routes
      case PageRoute.ADMIN: 
      case PageRoute.ADMIN_DASHBOARD: 
        return <Admin navigate={setCurrentPage} />;

      default: return <Home navigate={setCurrentPage} />;
    }
  };

  // Don't show public layout for admin dashboard
  if (currentPage === PageRoute.ADMIN || currentPage === PageRoute.ADMIN_DASHBOARD) {
    return (
      <AnimatePresence mode="wait">
        <motion.div key={currentPage} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <Layout currentPage={currentPage} navigate={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div key={currentPage} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
        <AppContent />
    </ContentProvider>
  );
};

export default App;
