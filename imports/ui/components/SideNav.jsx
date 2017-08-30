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
          <button id="close-nav">X</button>
        </div>
        <div className="overlay-content">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
