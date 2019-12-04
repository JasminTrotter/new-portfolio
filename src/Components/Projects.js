import React from 'react';
import copy from '../Assets/copy.json';
import '../Styles/Projects.css';
import TechList from './TechList.js';
import ProjectDescription from './ProjectDescription.js';

function Projects() {

  return (
    <>
      {copy.projects.map((project, i) => (
        <div className='project-item box-shadow' key={i}>
          <img className='project-img' src={project.image} alt={project.header} onClick={() => window.open(project.projectLink)} />
          <ProjectDescription description={project.description} link={project.projectLink} />
          <div className='technologies-container'>
            <h3>Technologies</h3>
            <div className='logo-container' >
              {<TechList list={project.techList} />}
            </div>
            {project.techDescription && <div className='tech-description'>{project.techDescription}</div>}
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
