import React, { Component } from 'react';

class FeaturedProjects extends Component {
  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="featured-projects">
        <h1 className="background">featured</h1>
        <div className="projects-wrapper">
          <div className="project-left" style={{ backgroundImage: `url('/images/projects-lavati.jpg')` }}>
            <div className="info">
              <p className="title"></p>
              <p className="description"></p>
              <a href="">View</a>
            </div>
          </div>
          <div className="project-right" style={{ backgroundImage: `url('/images/taphaus/Case-Study_taphaus_02.jpg')` }}>
            <div className="info">
              <p className="title"></p>
              <p className="description"></p>
              <a href="">View</a>
            </div>
          </div>
          <div className="project-left" style={{ backgroundImage: `url('/images/projects-bane.jpg')` }}>
            <div className="info">
              <p className="title"></p>
              <p className="description"></p>
              <a href="">View</a>
            </div>
          </div>
        </div> {/*  End Project Wrapper  */}
        <div className="view-background">
          <div className="btn">
            <a href="/projects"><h1>view all projects</h1></a>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
