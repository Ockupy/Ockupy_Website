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
            img={'/images/home/featured-1.jpg'}
            title={'Lavati'}
            description={'Modern Fashion Shoes'}
          />
          <ProjectBlock
            link={'/projects/taphaus'}
            img={'/images/home/featured-2.jpg'}
            title={'Taphaus'}
            description={'Restaurant Marketing'}
          />
          <ProjectBlock
            link={'/projects/bane'}
            img={'/images/home/featured-3.jpg'}
            title={'Bane'}
            description={'Making A Monster'}
          />
        </div> {/*  End Project Wrapper  */}
      </div>
    );
  }
}

export default FeaturedProjects;
