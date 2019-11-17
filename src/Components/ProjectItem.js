import React from 'react';
import copy from '../Assets/copy.json';
import '../Styles/ProjectItem.css';

function ProjectItem({ header }) {
  return (
    <div className="ProjectItem">
      <h3>{header}</h3>
    </div>
  );
}

export default ProjectItem;
