import React from 'react';
import copy from '../Assets/copy.json';
import headshot from '../Assets/headshot.jpg';
import '../Styles/Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <div className='bio' style={{ width: '100%' }}>
        <img className='headshot' src={headshot} alt='Jasmin Trotter headshot'></img>
        {copy.bio.split('|').map((p, i) => <p className={(i === 0) ? 'first-paragraph' : 'not-first-paragraphs'} key={Math.random()} style={{ marginBottom: '10px' }}>{p}</p>)}
      </div>
    </div>
  );
}

export default Intro;
