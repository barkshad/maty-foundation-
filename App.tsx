
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { PageRoute } from './types';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import './components/AnimatedCounter';
import './components/AnimatedText';

// Contexts
import { ContentProvider } from './contexts/ContentContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Socials from './pages/Socials';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPlan from './pages/AdminPlan';

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

// Protected Route Wrapper
const ProtectedAdminRoute: React.FC<{ children: React.ReactNode, navigate: (page: PageRoute) => void }> = ({ children, navigate }) => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PageRoute.ADMIN);
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
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
      case PageRoute.STORIES: return <Stories />;
      case PageRoute.GALLERY: return <Gallery />;
      case PageRoute.CONTACT: return <Contact />;
      case PageRoute.SOCIALS: return <Socials />;
      
      // Admin Routes
      case PageRoute.ADMIN: return <AdminLogin navigate={setCurrentPage} />;
      case PageRoute.ADMIN_DASHBOARD: 
        return (
          <ProtectedAdminRoute navigate={setCurrentPage}>
            <AdminDashboard navigate={setCurrentPage} />
          </ProtectedAdminRoute>
        );

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
    <AuthProvider>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;
