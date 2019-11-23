import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Intro from './Intro';
import Projects from './Projects';
import Nav from './Nav';
import Contact from './Contact';
import Header from './Header';

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
        {showIntro && <Intro />}
        {showProjects && <Projects />}
        {showContact && <Contact />}
      </main>
    </div>
  );
}

export default App;
