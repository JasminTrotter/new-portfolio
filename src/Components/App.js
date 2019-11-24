import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Intro from './Intro';
import Nav from './Nav';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';

function App() {
  const [navPosition, updateNavPosition] = useState('side');
  const [showIntro, updateShowIntro] = useState(false);
  const [showProjects, updateShowProjects] = useState(true);
  const [showContact, updateShowContact] = useState(false);

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
      <Header />
      <Nav
        position={navPosition}
        updateShowIntro={updateShowIntro}
        updateShowProjects={updateShowProjects}
        updateShowContact={updateShowContact}
      />
      <main className={`${navPosition}-main`}>
        <div className='wrapper'>
          {showIntro && <Intro />}
          {showProjects && <Projects />}
          {showContact && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App;
