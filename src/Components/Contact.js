import React from 'react';
import '../Styles/Contact.css';
import github from '../Assets/logos/githublogo.png'
import gmail from '../Assets/logos/gmaillogo.png'
import linkedin from '../Assets/logos/linkedinlogo.png'
import insta from '../Assets/logos/instalogo.png'

function Contact() {

  return (
    <div className='Contact'>
      <h2>Contact</h2>
      <section className='contact'>
        <address>
          <ul className='contact-links'>
            <li className='contact-link'>
              <button onClick={() => window.open('mailto:jasminmtrotter@gmail.com')}>
                <img src={gmail} className='logo' alt='click to send an email to Jasmin' />
              </button>
            </li>

            <li className='contact-link'>
              <button onClick={() => window.open('https://www.linkedin.com/in/jasminmtrotter/')}>
                <img src={linkedin} className='logo' alt="click to visit Jasmin's Linked In" />
              </button>
            </li>

            <li className='contact-link'>
              <button onClick={() => window.open('https://github.com/JasminTrotter')}>
                <img src={github} className='logo' alt="click to visit Jasmin's Git Hub" />
              </button>
            </li>
            <li className='contact-link'>
              <button onClick={() => window.open('https://www.instagram.com/contemplative_jasmin')}>
                <img src={insta} className='logo' alt="click to visit Jasmin's Insta Gram" />
              </button>
            </li>
          </ul>
          <p id='location'><span role='img' aria-label='pin'>&#128205; </span> Based in Portland, OR.</p>
        </address>
      </section>
    </div>
  );
}

export default Contact;
