import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { PageRoute } from './types';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(PageRoute.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case PageRoute.HOME:
        return <Home navigate={setCurrentPage} />;
      case PageRoute.ABOUT:
        return <About />;
      case PageRoute.PROGRAMS:
        return <Programs navigate={setCurrentPage} />;
      case PageRoute.GET_INVOLVED:
        return <GetInvolved />;
      case PageRoute.STORIES:
        return <Stories />;
      case PageRoute.GALLERY:
        return <Gallery />;
      case PageRoute.CONTACT:
        return <Contact />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} navigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;