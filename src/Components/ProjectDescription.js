import React from 'react';

function ProjectDescription({ description, link }) {

  return (
    <>
      {description.indexOf('<>') !== -1 && <p className='project-description'>
        {description.substring(0, description.indexOf('<>'))}
        <a className='bold' href={link} target='_blank' rel="noopener noreferrer">
          {description.substring(description.indexOf('<>') + 2, description.indexOf('</>'))}
        </a>
        {description.substring(description.indexOf('</>') + 3, description.length)}
      </p>}
      {description.indexOf('<>') === -1 && <p className='project-description'>
        {description}
      </p>}
    </>
  );
}

export default ProjectDescription;
