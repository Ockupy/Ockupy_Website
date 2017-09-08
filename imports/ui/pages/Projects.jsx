import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectBlock } from '../components/ProjectBlock';

class Projects extends Component {

  componentDidMount() {
    //jquery
  }

  projects() {
    return [
      {_id:1, title: 'LAVATI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:2, title: 'TAPHAUS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:3, title: 'BANE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:4, title: 'MADD COFFEE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:5, title: 'AEON', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'}
    ]
  }

  renderProjects() {
    return this.projects().map((project) => {
      return (
        <ProjectBlock
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
