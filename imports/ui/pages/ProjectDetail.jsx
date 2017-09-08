import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FullImage } from '../components/Projects/Full-Image';
import Slider from '../components/Projects/Slider';

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
            <h2 className="title"></h2>
            <div className="info"></div>
          </div>
        </div>
        <Slider />
      </div>
    );
  }
}

export default ProjectDetail;
