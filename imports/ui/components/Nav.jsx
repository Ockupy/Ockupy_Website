import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="navigation">
        <div className="menu">
          <a id="nav-btn" href="">menu</a>
        </div>
        <div className="logo-right">
          <img src={this.props.navLogo} />
        </div>
      </div>
    );
  }
}

export default Nav;
