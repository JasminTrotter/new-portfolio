import React from 'react';
import copy from '../Assets/copy.json';
import headshot from '../Assets/JasminTrotter.JPG'
import '../Styles/JasminTrotter.css';

function JasminTrotter() {
  return (
    <div className="JasminTrotter">
      <section className='bio-container'>
        <div><img className='headshot' src={headshot} alt='Jasmin Trotter'></img></div>
        <div>{copy.bio}</div>
      </section>
    </div>
  );
}

export default JasminTrotter;
