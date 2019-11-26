import React, { useEffect, useState } from 'react';
import copy from '../Assets/copy.json';
import '../Styles/Projects.css';

function TechList({ list }) {
  const [logoObjects, setLogoObjects] = useState(null);

  useEffect(() => {
    const selectedLogos = [];

    if (list && list.length) {
      list.forEach(techItem => {
        copy.logos.forEach(obj => {
          if (obj.label === techItem) {
            selectedLogos.push(obj)
          }
        });
      });
    }

    setLogoObjects(selectedLogos);
  }, [list]);

  return (
    <>
      {logoObjects && logoObjects.map((logoObject, i) => (
        <button className="logo-parent" disabled key={i}>
          <img src={logoObject.src} className="logo" alt={logoObject.label} />
          <p className='logo-label'>{logoObject.label}</p>
        </button>
      ))}
    </>
  );
}

export default TechList;
