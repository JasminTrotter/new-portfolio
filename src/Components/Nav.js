import React from 'react';
import '../Styles/Nav.css';

function Nav({
  position,
  updateShowIntro,
  updateShowProjects,
  updateShowContact,
  updateShowResume,
  showIntro,
  showProjects,
  showContact,
  showResume
}) {

  function changeView(tab) {
    switch (tab) {
      case 'intro':
        updateShowIntro(true)
        updateShowContact(false)
        updateShowProjects(false)
        updateShowResume(false)
        break;
      case 'projects':
        updateShowIntro(false)
        updateShowContact(false)
        updateShowProjects(true)
        updateShowResume(false)
        break;
      case 'contact':
        updateShowIntro(false)
        updateShowContact(true)
        updateShowProjects(false)
        updateShowResume(false)
        break;
      case 'resume':
        updateShowIntro(false)
        updateShowContact(false)
        updateShowProjects(false)
        updateShowResume(true)
        break;
      default:
        break;
    }
  }

  return (
    <div className={`${position}-nav Nav box-shadow`}>
      <nav className='nav-items-container'>
        <button tabIndex='0' className={showIntro ? 'nav-item-selected' : ''} onClick={() => changeView('intro')}>
          {(position === 'desktop') && 'Intro'}
          {(position === 'mobile') && <i className='fa fa-home'></i>}
        </button>
        <button tabIndex='0' className={showProjects ? 'nav-item-selected' : ''} onClick={() => changeView('projects')}>
          {(position === 'desktop') && 'Projects'}
          {(position === 'mobile') && <i className='fas fa-briefcase'></i>}
        </button>
        <button tabIndex='0' className={showResume ? 'nav-item-selected' : ''} onClick={() => changeView('resume')}>
          {(position === 'desktop') && 'Resume'}
          {(position === 'mobile') && <i className='fas fa-address-card'></i>}
        </button>
        <button tabIndex='0' className={showContact ? 'nav-item-selected' : ''} onClick={() => changeView('contact')}>
          {(position === 'desktop') && 'Contact'}
          {(position === 'mobile') && <i className='fas fa-envelope'></i>}
        </button>
      </nav>
    </div>
  );
}

export default Nav;
