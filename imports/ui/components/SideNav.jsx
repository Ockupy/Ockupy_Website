import React, { Component } from 'react';

class SideNav extends Component {

  componentDidMount() {
    $('#close-nav').on('click', function () {
      $('.sideNav').toggleClass('nav-toggled');
    });
  }

  render() {
    return (
      <div className="sideNav">
        <div className="close-btn">
          <a id="close-nav" href="">close</a>
        </div>
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
