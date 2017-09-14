import React, { Component } from 'react';
import SideNav from '../components/SideNav';
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
        console.log('down');

      } else {
        // upscroll code
        console.log('up');
        
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
        <SideNav />
        <Nav
          navLogo='/images/logo-black.png'
        />
        {this.renderProjects()}
        <Footer />
      </div>
    );
  }
}

export default Projects;
