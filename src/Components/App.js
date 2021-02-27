import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Intro from './Intro';
import Nav from './Nav';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  const [navPosition, updateNavPosition] = useState('mobile');
  const [showIntro, updateShowIntro] = useState(true);
  const [showProjects, updateShowProjects] = useState(false);
  const [showContact, updateShowContact] = useState(false);
  const [showResume, updateShowResume] = useState(false);

  useEffect(() => {
    updateNav();
    window.addEventListener('resize', updateNav);
  }, [
    showIntro,
    showProjects,
    showContact,
    showResume
  ]);

  function updateNav() {
    if (window.innerWidth < 1100) {
      updateNavPosition('mobile')
    } else if (window.innerWidth >= 1100) {
      updateNavPosition('desktop')
    }
  }

  return (
    <div className='App'>
      <div className='content-wrapper'>
        <div style={{ display: 'flex' }}>
          <Header />
          <Nav
            position={navPosition}
            updateShowIntro={updateShowIntro}
            updateShowProjects={updateShowProjects}
            updateShowContact={updateShowContact}
            updateShowResume={updateShowResume}
            showIntro={showIntro}
            showProjects={showProjects}
            showContact={showContact}
            showResume={showResume}
          />
        </div>
        <main className={`${navPosition}-main`}>
          <div className='wrapper' tabIndex='0'>
            {showIntro && <Intro />}
            {showProjects && <Projects />}
            {showContact && <Contact />}
            {showResume && <Resume />}
          </div>
        </main>
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
}

export default App;
