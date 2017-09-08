import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {
    let button = $('#nav-btn');
    let sideNav = $('.sideNav');
    let closeNav = $('#close-nav');

    button.on('click', function () {
      sideNav.toggleClass('nav-toggled');
    });
  }

  render() {
    return (
      <div className="navigation">
        <div className="menu">
          <a id="nav-btn" href="">menu</a>
        </div>
        <div className="logo-right">
          <img src="/images/logo-black.png" />
        </div>
      </div>
    );
  }
}

export default Nav;
