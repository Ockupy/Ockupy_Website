import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';

class About extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <Nav />
        <h2>About Page!</h2>
      </div>
    );
  }
}

export default About;
