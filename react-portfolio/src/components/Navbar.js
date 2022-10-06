import React from 'react';
import '../assets/style.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
      <ul className='navTabs'>
        <li className='navTabs'>
          {/* importing from About.js */}
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'navLink active' : 'navLink'}
            >
            About
          </a>
        </li>
        <li className='navTabs'>
          {/* importing from Portfolio.js */}
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'navLink active' : 'navLink'}
            >
            Portfolio
          </a>
        </li>
        <li className='navTabs'>
          {/* importing from Resume.js */}
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'navLink active' : 'navLink'}
            >
            Resume
          </a>
        </li>
        <li className='navTabs'>
          {/* importing from Contact.js */}
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'navLink active' : 'navLink'}
            >
            Contact
          </a>
        </li>
      </ul>
  );
}

export default Navbar;
