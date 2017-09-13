import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {
    let button = $('#nav-btn');
    let sideNav = $('.sideNav');
    let closeNav = $('#close-nav');

    button.on('click', function () {
      sideNav.toggleClass('nav-toggled');
      $('#nav-btn').toggleClass('white');
    });
  }

  render() {
    return (
      <div className="navigation">
        <div className="menu">
          <a id="nav-btn" href="" style={{ color: `${this.props.menuColor || '#000' }` }}>menu</a>
        </div>
        <div className="logo-right">
          <img src={this.props.navLogo} />
        </div>
      </div>
    );
  }
}

export default Nav;
