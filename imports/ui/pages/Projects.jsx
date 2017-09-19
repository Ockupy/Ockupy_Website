import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectBlock } from '../components/Projects/ProjectBlock';
import ProjectData from '/public/json/projects.json';

class Projects extends Component {

  componentDidMount() {
    var lastScrollTop = 0;
    document.addEventListener("scroll", function(){
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        // downscroll code
        // console.log('down');
      } else {
        // upscroll code
        // console.log('up');
      }
      lastScrollTop = st;
    }, false);
  }

  projects() {
    return ProjectData;
  }

  renderProjects() {
    return this.projects().map((project) => {
      return (
        <ProjectBlock
          key={project._id}
          link={project.link}
          img={project.projectImg}
          title={project.title}
          description={project.description}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Nav
          navLogo='/images/logo-black.png'
        />
        <div className="page-content-wrapper">
          {this.renderProjects()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
