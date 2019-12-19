import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Intro from './Intro';
import Nav from './Nav';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';

function App() {
  const [navPosition, updateNavPosition] = useState('side');
  const [showIntro, updateShowIntro] = useState(true);
  const [showProjects, updateShowProjects] = useState(false);
  const [showContact, updateShowContact] = useState(false);
  const [showAbout, updateShowAbout] = useState(false);

  useEffect(() => {
    updateNav();
    window.addEventListener('resize', updateNav);
  }, [
    showIntro,
    showProjects,
    showContact
  ]);

  function updateNav() {
    if (window.innerWidth < 768) {
      updateNavPosition('mobile')
    } else if (window.innerWidth > 768) {
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
            updateShowAbout={updateShowAbout}
            showIntro={showIntro}
            showProjects={showProjects}
            showContact={showContact}
            showAbout={showAbout}
          />
        </div>
        <main className={`${navPosition}-main`}>
          <div className='wrapper'>
            {showIntro && <Intro />}
            {showProjects && <Projects />}
            {showContact && <Contact />}
          </div>
        </main>
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
}

export default App;
