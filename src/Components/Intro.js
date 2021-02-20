import React from 'react';
import copy from '../Assets/copy.json';
import headshot from '../Assets/headshot.jpg';
import '../Styles/Intro.css';

function Intro() {
  return (
    <div className="Intro box-shadow">
      <section className='bio-container'>
        <div><img className='headshot' src={headshot} alt='Jasmin Trotter'></img></div>
        <div className='bio'>{copy.bio}</div>
      </section>
    </div>
  );
}

export default Intro;
