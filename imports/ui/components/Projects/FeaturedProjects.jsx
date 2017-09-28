import React, { Component } from 'react';
import { ProjectBlock } from './ProjectBlock';

class FeaturedProjects extends Component {
  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="featured-projects">
        <h1 className="background hideme">featured</h1>
        <div className="projects-wrapper">
          <ProjectBlock
            link={'/projects/lavati'}
            img={'/images/home/Homepage_v2_07 (1).png'}
            title={'Lavati'}
            description={'Modern Fashion Shoes'}
          />
          <ProjectBlock
            link={'/projects/taphaus'}
            img={'/images/home/Homepage_v2_11.png'}
            title={'Taphaus'}
            description={'Restaurant Marketing'}
          />
          <ProjectBlock
            link={'/projects/bane'}
            img={'/images/home/Homepage_v2_15.png'}
            title={'Bane'}
            description={'Making A Monster'}
          />
        </div> {/*  End Project Wrapper  */}
      </div>
    );
  }
}

export default FeaturedProjects;
