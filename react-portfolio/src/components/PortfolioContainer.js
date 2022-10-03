import React, { useState } from 'react';
import '../../src/App.css';
import NavTabs from './Navbar';
import About from './pages/About';
import Blog from './pages/Portfolio';
import Home from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}