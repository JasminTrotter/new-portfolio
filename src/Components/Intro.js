import React from 'react';
import copy from '../Assets/copy.json';
import headshot from '../Assets/headshot.JPG';
import '../Styles/Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <section className='bio-container'>
        <div><img className='headshot' src={headshot} alt='Jasmin Trotter'></img></div>
        <div>{copy.bio}</div>
      </section>
    </div>
  );
}

export default Intro;
