import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectBlock } from '../components/Projects/ProjectBlock';
import ProjectData from '/public/json/projects.json';

class Projects extends Component {

  scrollBarInstance() {
    var scrollbar = Scrollbar.init(document.querySelector('.page-content-wrapper'), {
      'speed': '2.2',
      'overscrollEffect': 'bounce',
      'damping': '0.04'
    });

    scrollbar.addListener(function () {
      $('.hideme').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $(this).css({
            opacity:1,
            transition:'all .8s ease-in-out',
            top:'0em'
          });
        }
      });
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    $('#projects').addClass('active');

    $('.project-container').filter(':nth-child(1), :nth-child(2)').removeClass('hideme');
    $('.project-container').filter(':nth-child(2)').css({
      marginBottom: '100px'
    });

    this.scrollBarInstance();
  }

  projects() {
    return ProjectData;
  }

  renderProjects() {
    return this.projects().map((project) => {
      return (
        <ProjectBlock
          key={project._id}
          link={`/projects/${project.link}`}
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
        <Nav />
        <div className="page-content-wrapper">
          <div className="project-page">
            {this.renderProjects()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
