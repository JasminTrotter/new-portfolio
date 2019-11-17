import React, { useEffect, useState } from 'react';
import copy from '../Assets/copy.json';
import '../Styles/ProjectItem.css';

function ProjectItem() {
  // const [projectHtml, setProjectHtml] = useState(<div></div>);

  useEffect(() => {
    console.log(copy.projects);

    let html = document.createElement('div');

    copy.projects.forEach((projectObj) => {
      let item = document.createElement('div');
      let header = document.createElement('h3');
      let image = document.createElement('img');

      image.className = 'project-img';
      item.className = 'project-item';

      header.innerHTML = projectObj.header;
      image.src = projectObj.image;

      item.appendChild(header);
      item.appendChild(image);
      html.appendChild(item);
    });

    // setProjectHtml(html);

    let projectsItemHtml = document.getElementById('ProjectsItem');
    projectsItemHtml.innerHTML = html.innerHTML;



  }, []);

  return (

    <div className='wrapper'>
      <div className="ProjectItem" id="ProjectsItem"></div>
      <div>
        <h3>Student Portal</h3>
        <img className="project-img" src="images/screenshots/studentportalscreen.PNG" alt="join class screenshot" />
        <p className="project-description">As the owner of Ballet Body by Jasmin, a beginning ballet program for adults, I am both the developer and consumer of my software products. I created Student Portal out of a need to provide my ballet students with a convenient way of purchasing classes and reviewing a list of their purchase history.</p>


        <div className="tech">
          <button className="more-button">Learn More <i className="fa fa-angle-double-right"></i></button>
          <div className="tech-list hidden">

            <div className="live-repo">
              <button className="button" >
                <span className="icon">Live App</span>
              </button>

              <button className="button">
                <span className="icon">Client Repo</span>
              </button>

              <button className="button">
                <span className="icon">API Repo</span>
              </button>

            </div>
          </div>
        </div>
        <div className="logo-container">

          <div className="logo-div"><img className="logo" src='images/logos/htmllogo.png' alt='HTML logo' /><p>HTML5</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/csslogo.png' alt='CSS logo' /><p>CSS3</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/javascriptlogo.png' alt='JavaScript logo' /><p>JavaScript</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/reactlogo.png' alt='react logo' /><p>React</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/reduxlogo.png' alt='redux logo' /><p>Redux</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/nodelogo.png' alt='Node logo' /><p>Node.js</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/expresslogo.jpg' alt='Express logo' /><p>Express</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/mlablogo.png' alt='M. lab logo' /><p>MLab</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/enzymelogo.jpg' alt='Enzyme logo' /><p>Enzyme</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/traviscilogo.png' alt='travis C I logo' /><p>Travis CI</p></div>
          <div className="logo-div"><img className="logo" src='images/logos/herokulogo.jpg' alt='heroku logo' /><p>Heroku</p></div>


        </div>
        <button className="less-button"><i className="fa fa-angle-double-up"></i></button>
      </div>
    </div>

  );
}

export default ProjectItem;
