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
  }, []);

  return (
    <>
      {logoObjects && logoObjects.map((logoObject, i) => (
        <a className="logo-parent" key={i}>
          <img src={logoObject.src} className="logo" alt={logoObject.label} />
          <p className='logo-label'>{logoObject.label}</p>
        </a>
      ))}
    </>
  );
}

export default TechList;
