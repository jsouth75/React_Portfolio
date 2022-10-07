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


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//       <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//       <a class="nav-link" href="#">Features</a>
//       <a class="nav-link" href="#">Pricing</a>
//     </div>
//   </div>
// </nav>

export default NavTabs;
