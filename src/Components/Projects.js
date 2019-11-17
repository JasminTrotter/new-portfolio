import React, { useEffect } from 'react';
import copy from '../Assets/copy.json';
import '../Styles/Projects.css';
import ProjectItem from './ProjectItem';

function Projects() {

  return (
    <div className="Projects">
      <ProjectItem />
    </div>
  );
}

export default Projects;
