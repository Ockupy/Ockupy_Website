import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectBlock } from '../components/Projects/ProjectBlock';

class Projects extends Component {

  componentDidMount() {
    //
  }

  projects() {
    return [
      {_id:1, img: '', title: 'LAVATI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:2, img: '', title: 'TAPHAUS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:3, img: '', title: 'BANE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:4, img: '', title: 'MADD COFFEE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'},
      {_id:5, img: '', title: 'AEON', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit augue nec dolor egestas convallis. Morbi rutrum posuere enim, ut venenatis magna sagittis nec. Mauris interdum bibendum tellus, vel iaculis nulla aliquet vulputate.'}
    ]
  }

  renderProjects() {
    return this.projects().map((project) => {
      return (
        <ProjectBlock
          key={project._id}
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
