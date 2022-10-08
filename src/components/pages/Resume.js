import React from 'react';
import '../../App.css';
import pdfFile from '../../assets/img/Resume.pdf';
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <h3>Georgia Tech bootcamp</h3>
        <p>During this bootcamp I have learned and built projects using the following...</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>APIs</li>
          <li>Node</li>
          <li>OOP</li>
          <li>Express</li>
          <li>SQL</li>
          <li>ORM</li>
          <li>MVC</li>
          <li>NoSQL</li>
          <li>PWA</li>
          <li>React</li>
          <li>MongoDB</li>
        </ul>
      <a href= {pdfFile} className="resumeBtn btn btn-lg active" role="button" aria-pressed="true">Download My Resume</a>
      <div>
     
      </div>
    </div>
  );
}

export default Resume;
