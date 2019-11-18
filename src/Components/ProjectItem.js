import React, { useEffect } from 'react';
import copy from '../Assets/copy.json';
import '../Styles/ProjectItem.css';

function ProjectItem() {

  useEffect(() => {
    console.log(copy.projects);

    let html = document.createElement('div');

    copy.projects.forEach((projectObj) => {
      let item = document.createElement('div');
      let header = document.createElement('h3');
      let image = document.createElement('img');
      let description = document.createElement('p');
      let tech = document.createElement('div');
      let techList = document.createElement('div');
      let logoContainer = document.createElement('div');

      if (projectObj.techList && projectObj.techList.length) {
        let logoItem;
        const selectedLogos = [];

        projectObj.techList.forEach(tech => {
          copy.logos.forEach(obj => {
            if (obj.label === tech) {
              selectedLogos.push(obj)
            }
          });
        });

        selectedLogos.forEach(selectedLogo => {
          logoItem = document.createElement('img');

          logoItem.src = selectedLogo.src;
          logoItem.className = 'logo';
          logoContainer.appendChild(logoItem);
        });

        console.log(selectedLogos)
      }

      tech.className = 'tech-container'
      image.className = 'project-img';
      item.className = 'project-item';
      description.className = 'project-description';

      header.innerHTML = projectObj.header;
      image.src = projectObj.image;
      description.innerHTML = projectObj.description;

      item.appendChild(header);
      item.appendChild(image);
      item.appendChild(description);
      techList.appendChild(logoContainer);
      item.appendChild(techList);
      html.appendChild(item);


    });

    // setProjectHtml(html);

    let projectsItemHtml = document.getElementById('ProjectsItem');
    projectsItemHtml.innerHTML = html.innerHTML;

  }, []);

  return (

    <div className='wrapper'>

      <div className="ProjectItem" id="ProjectsItem"></div>

    </div>

  );
}

export default ProjectItem;
