import React, { Component } from 'react';

class SideScroll extends Component {

  componentDidMount() {
    var didScroll;

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 2000);

    function hasScrolled() {
      //show the menu
    }
  }

  render() {
    return (
      <aside className="side-nav">
        <nav>
          <ul className="row">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideScroll;
