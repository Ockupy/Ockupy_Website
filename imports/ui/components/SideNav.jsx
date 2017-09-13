import React, { Component } from 'react';

class SideNav extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="sideNav">
        <div className="overlay-content">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
