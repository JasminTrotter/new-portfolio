import React, { useEffect } from 'react';
import resume from '../Assets/JTROTTER_Resume_2021.pdf'

function Resume() {
  return (
    <div className='Resume' style={{ position: 'sticky' }}>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTzKyWhTLa7UHuqe8jaCgsPEU2K2RoHRSvTFHqd-WtrdHaI2nicmbmed1Y39mWwg3R-5sLHbsmlcLuc/pub?embedded=true"
        style={{ width: '800px', height: '1000px' }}
        frameBorder='0'>
      </iframe>
    </div>
  );
}

export default Resume;
