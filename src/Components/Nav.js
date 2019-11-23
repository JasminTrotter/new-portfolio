import React from 'react';
import '../Styles/Nav.css';

function Nav({
  position,
  updateShowIntro,
  updateShowProjects,
  updateShowContact
}) {

  return (
    <div className={`${position}-nav Nav`}>
      <div className='nav-items-container'>

        <div onClick={() => {
          updateShowIntro(true)
          updateShowContact(false)
          updateShowProjects(false)
        }}>
          {(position === 'desktop') && 'Intro'}
          {(position === 'mobile') && <i className="fa fa-home" aria-hidden="true"></i>}
        </div>
        <div onClick={() => {
          updateShowIntro(false)
          updateShowContact(false)
          updateShowProjects(true)
        }}>
          {(position === 'desktop') && 'Projects'}
          {(position === 'mobile') && <i className="fas fa-briefcase"></i>}
        </div>
        <div onClick={() => {
          updateShowIntro(false)
          updateShowContact(false)
          updateShowProjects(false)
        }}>
          {(position === 'desktop') && 'About'}
          {(position === 'mobile') && <i className="fas fa-address-card"></i>}
        </div>
        <div onClick={() => {
          updateShowIntro(false)
          updateShowContact(true)
          updateShowProjects(false)
        }}>
          {(position === 'desktop') && 'Contact'}
          {(position === 'mobile') && <i className="fas fa-envelope"></i>}

        </div>
      </div>
    </div>
  );
}

export default Nav;
