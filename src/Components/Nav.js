import React from 'react';
import '../Styles/Nav.css';

function Nav({ position }) {
  return (
    <div className={`${position}-nav`}>
      <div className='nav-items-container'>

        <div>Jasmin Trotter</div>
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Nav;
