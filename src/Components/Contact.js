import React from 'react';
import '../Styles/Contact.css';

function Contact() {

  return (
    <div className="Contact box-shadow">
      <section className="contact">
        <h2>Contact</h2>
        <address>
          <div className="contact-links">
            <div className="contact-link">
              <button onClick={() => window.open('mailto:jasminmtrotter@gmail.com')}>
                <img src="https://lh3.googleusercontent.com/uLJRU-SUFtPkKNA1ok-9Fg2sXtBE7JKdICa9I4VRHCp30wZEVj7aXFEDwico9c6g2o5GZW9VJwAKgqOXVvi9n8qSxr_6d2bmsL3Ipb1h0zwsYIMGy-3zTseNF8oU4tEIZqVS3izdOA=s225-p-k" className="logo" alt="g mail logo" />
              </button>
            </div>

            <div className="contact-link">
              <button onClick={() => window.open('https://www.linkedin.com/in/jasminmtrotter/')}>
                <img src="https://lh3.googleusercontent.com/fxdVXzK0Kh_Tb8DhSqxC6Qtgq8Nxri5KpZfBXi1q7XjJJJ8now-bcMBRMBun2iGWL972l2CSuMkkSoWXyPvYplPCFgbvvm5ETDL4XqG0-jnn-mcxocXSO_bnh0HfKtDUwapNuqiPUA=s225-p-k" className="logo" alt="linked in logo" />
              </button>
            </div>

            <div className="contact-link">
              <button onClick={() => window.open('https://github.com/JasminTrotter')}>
                <img src="https://lh3.googleusercontent.com/TYfFgkNvEtAeTUaS1jA4nLyb5IKAeDAwNrcRXNN-ActGjUsh2k8bRAA8KDrmn2EEveUb9J5cwN8PGS3Lykz5WeBiK-bcRf8BS5dFOiDX8mk7wda2ANnEBmoBJMdtUittmCxaJ6lehA=s224-p-k" className="logo" alt="git hub logo" />
              </button>
            </div>
            <div className="contact-link">
              <button onClick={() => window.open('https://twitter.com/JasminTrotter')}>
                <img src="https://lh3.googleusercontent.com/Pti2qyaYnqsTknzmK4aDJzGqSxdAS5nXZp6CKcQPkaSBNjtPGq4TlAGP9NweEZmvsw1dt5KnkZmdNwbwr6YOUEAHm1dCEqV-hbJXoejaRDfgCDNrE5XpitfV2_kGdYqfknIcladX2A=w2400" className="logo" alt="twitter logo" />
              </button>
            </div>
          </div>
          <p id="location"><span role="img" aria-label="pin">&#128205; </span> Based in Portland, OR.</p>
        </address>
      </section>
    </div>
  );
}

export default Contact;
