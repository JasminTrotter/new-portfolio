import React from 'react';
import copy from '../Assets/copy.json';
import '../Styles/Projects.css';
import TechList from './TechList.js';
import ProjectDescription from './ProjectDescription.js';

function Projects() {

  return (
    <>
      {copy.projects.map((project, i) => (
        <div className='project-item' key={i}>
          <img className='project-img' src={project.image} />
          <ProjectDescription description={project.description} />
          <h3>Technologies:</h3>
          <div className='logo-container' >
            {<TechList list={project.techList} link={project.projectLink} />}
          </div>
          {project.techDescription && <div className='tech-description'>{project.techDescription}</div>}
        </div>
      ))}
    </>
  );
}

export default Projects;
