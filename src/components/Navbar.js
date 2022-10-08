import React from 'react';
import '../assets/style.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='d-flex justify-content-center'>
    
    <nav>
      <a href="#About">
        <button className="navbar rounded navbar-brand h1 shadow p-2 mb-0" onClick={() => handlePageChange('About')}>About Me</button>
      </a>
    </nav>
    <nav>
      <a href="#Portfolio">
        <button className="navbar rounded navbar-brand h1 shadow p-2 mb-0" onClick={() => handlePageChange('Portfolio')}>Portfolio</button>
      </a>
    </nav>
    <nav>
      <a href="#Resume">
        <button className="navbar rounded navbar-brand h1 shadow p-2 mb-0" onClick={() => handlePageChange('Resume')}>Resume</button>
      </a>
    </nav>
    <nav>
      <a href="#Contact">
        <button className="navbar rounded navbar-brand h1 shadow p-2 mb-0" onClick={() => handlePageChange('Contact')}>Contact</button>
      </a>
    </nav>
    </div>
  );
}

export default NavTabs;
