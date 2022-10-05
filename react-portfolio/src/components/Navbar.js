import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
      <ul>
        <li className="nav-item">
          {/* importing from About.js */}
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
          </a>
        </li>
        <li className="nav-item">
          {/* importing from Portfolio.js */}
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          {/* importing from Resume.js */}
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
          </a>
        </li>
        <li className="nav-item">
          {/* importing from Contact.js */}
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
          </a>
        </li>
      </ul>
  );
}

export default Navbar;
