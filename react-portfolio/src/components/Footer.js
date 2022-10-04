import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import '../App.css'


export default function Footer() {
  return (
    <footer>
      <a href='https://github.com/jsouth75' ><DiGithubBadge /></a>
      <a href='https://www.linkedin.com/in/jason-south-86939a47/' ><FaLinkedin /></a>
    </footer>
  );
}
