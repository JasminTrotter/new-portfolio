import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import JasminTrotter from './JasminTrotter';
import Nav from './Nav';

function App() {
  const [navPosition, updateNavPosition] = useState('side');

  useEffect(() => {
    updateNav();
    window.addEventListener('resize', updateNav);
  });

  function updateNav() {
    if (window.innerWidth < 768) {
      updateNavPosition('bottom')
    } else if (window.innerWidth > 768) {
      updateNavPosition('side')
    }
  }

  return (
    <div className='App'>
      <Nav position={navPosition} />
      <div className='main-content'>
        <main>
          <JasminTrotter />
        </main>
      </div>
    </div>
  );
}

export default App;
