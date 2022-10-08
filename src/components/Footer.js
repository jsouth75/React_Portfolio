import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import '../App.css';
import '../assets/style.css';


function Footer() {
  return (
    <div className='footer'>
      <footer className='icons'>
        <div className='icons'>
          <a href='https://github.com/jsouth75' ><DiGithubBadge /></a>
        </div>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/jason-south-86939a47/' ><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;