import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Projects extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <Nav />
        <h2>Projects Page!</h2>
        <Footer />
      </div>
    );
  }
}

export default Projects;
