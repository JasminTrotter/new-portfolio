import React from 'react';
import resume from '../Assets/JTROTTER_Resume_2021.pdf'

function Resume() {
  return (
    <div className="Resume" style={{ position: "sticky" }}>
      <object data={resume} type="application/pdf" width="1000px" height="800px" aria-label="resume PDF"></object>
    </div>
  );
}

export default Resume;
