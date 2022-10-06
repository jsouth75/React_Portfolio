import React from 'react';
import '../../App.css';
import pdfFile from '../../assets/img/Resume.pdf';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <div>
        <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
