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
        <div className="menu"
          style={{
            color: `${this.props.menuColor || '#000' }`
          }}>
          <a
            style={{
              color: `${this.props.menuColor || '#000' }`,
              borderTopColor: `${this.props.menuColor || '#000' }`,
              borderBottomColor: `${this.props.menuColor || '#000' }`
            }}
            id="nav-btn" href="">menu</a>
        </div>
        <div className="logo-right">
          <img src={this.props.navLogo} />
        </div>
      </div>
    );
  }
}

export default Nav;
