import React, { Component } from 'react';
import SideNav from '../SideNav';
import Nav from '../Nav';
import Footer from '../Footer';
import FullImage from './Full-Image';

class ProjectDetail extends Component {

  componentDidMount() {
    //jquery
  }


  render() {
    return (
      <div>
        <SideNav />
        <div className="full-header">
          <Nav />
          <div className="popout">
            <h2 className="title">Hello</h2>
            <div className="info"></div>
          </div>
        </div>
        <FullImage />
        <FullImage />
        <Slider />
      </div>
    );
  }
}

export default ProjectDetail;
