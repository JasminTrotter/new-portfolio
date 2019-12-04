import React from 'react';
import '../Styles/Nav.css';

function Nav({
  position,
  updateShowIntro,
  updateShowProjects,
  updateShowContact,
  updateShowAbout,
  showIntro,
  showProjects,
  showContact,
  showAbout
}) {

  return (
    <div className={`${position}-nav Nav box-shadow`}>
      <div className='nav-items-container'>
        <div className={showIntro ? 'nav-item-selected' : undefined} onClick={() => {
          updateShowIntro(true)
          updateShowContact(false)
          updateShowProjects(false)
          updateShowAbout(false)
        }}>
          {(position === 'desktop') && 'Intro'}
          {(position === 'mobile') && <i className="fa fa-home"></i>}
        </div>
        <div className={showProjects ? 'nav-item-selected' : undefined} onClick={() => {
          updateShowIntro(false)
          updateShowContact(false)
          updateShowProjects(true)
          updateShowAbout(false)
        }}>
          {(position === 'desktop') && 'Projects'}
          {(position === 'mobile') && <i className="fas fa-briefcase"></i>}
        </div>
        <div className={showAbout ? 'nav-item-selected' : undefined} onClick={() => {
          updateShowIntro(false)
          updateShowContact(false)
          updateShowProjects(false)
          updateShowAbout(true)
        }}>
          {(position === 'desktop') && 'About'}
          {(position === 'mobile') && <i className="fas fa-address-card"></i>}
        </div>
        <div className={showContact ? 'nav-item-selected' : undefined} onClick={() => {
          updateShowIntro(false)
          updateShowContact(true)
          updateShowProjects(false)
          updateShowAbout(false)
        }}>
          {(position === 'desktop') && 'Contact'}
          {(position === 'mobile') && <i className="fas fa-envelope"></i>}

        </div>
      </div>
    </div>
  );
}

export default Nav;
