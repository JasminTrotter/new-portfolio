import React, { useEffect } from 'react';
import copy from '../Assets/copy.json';
import '../Styles/Projects.css';

function Projects() {

  useEffect(() => {
    let html = document.createElement('div');

    copy.projects.forEach((projectObj) => {
      let item = document.createElement('div');
      let image = document.createElement('img');
      let description = document.createElement('p');
      let techList = document.createElement('div');
      let techHeader = document.createElement('h3');

      if (projectObj.techList && projectObj.techList.length) {
        let logoParent;
        const selectedLogos = [];

        projectObj.techList.forEach(techItem => {
          copy.logos.forEach(obj => {
            if (obj.label === techItem) {
              selectedLogos.push(obj)
            }
          });
        });

        selectedLogos.forEach(selectedLogo => {
          logoParent = document.createElement('div');

          let img = document.createElement('img');
          let label = document.createElement('p');

          img.src = selectedLogo.src;
          img.className = 'logo';
          img.alt = selectedLogo.label + ' logo';
          label.innerHTML = selectedLogo.label;
          logoParent.classList = 'logo-parent';

          logoParent.appendChild(img);
          logoParent.appendChild(label);
          techList.appendChild(logoParent);
        });
      }

      techList.className = 'logo-container';
      image.className = 'project-img';
      item.className = 'project-item';
      description.className = 'project-description';

      image.src = projectObj.image;
      description.innerHTML = projectObj.description;
      techHeader.innerHTML = 'Technologies:';

      item.appendChild(image);
      item.appendChild(description);
      item.appendChild(techHeader);
      item.appendChild(techList);
      item.appendChild(techList);
      html.appendChild(item);
    });

    let projectsListHtml = document.getElementById('ProjectsList');

    projectsListHtml.innerHTML = html.innerHTML;

  }, []);

  return (
    <div className='wrapper'>
      <div className="Projects" id="ProjectsList"></div>
    </div>
  );
}

export default Projects;
