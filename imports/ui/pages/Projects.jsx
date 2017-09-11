import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectBlock } from '../components/Projects/ProjectBlock';
import ProjectData from '/public/json/projects.json';

class Projects extends Component {

  componentDidMount() {
    //
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
          img={project.img}
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
        <Nav />
          {this.renderProjects()}
        <Footer />
      </div>
    );
  }
}

export default Projects;
