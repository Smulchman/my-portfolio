import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // Render a page based on the state value of `currentPage`
    const renderPage = () => {
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Home />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }