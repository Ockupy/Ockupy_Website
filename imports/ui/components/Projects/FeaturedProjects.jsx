import React, { Component } from 'react';
import { ProjectBlock } from './ProjectBlock';

class FeaturedProjects extends Component {
  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="featured-projects">
        <h1 className="background">featured</h1>
        <div className="projects-wrapper">
          <ProjectBlock
            link={'/projects/lavati'}
            img={'/images/projects-lavati.jpg'}
            title={'Lavati'}
            description={'Modern Fashion Shoes'}
          />
          <ProjectBlock
            link={'/projects/taphaus'}
            img={'/images/taphaus/Case-Study_taphaus_02.jpg'}
            title={'Taphaus'}
            description={'Restaurant Marketing'}
          />
          <ProjectBlock
            link={'/projects/bane'}
            img={'/images/projects-bane.jpg'}
            title={'Bane'}
            description={'Making A Monster'}
          />
        </div> {/*  End Project Wrapper  */}
      </div>
    );
  }
}

export default FeaturedProjects;
