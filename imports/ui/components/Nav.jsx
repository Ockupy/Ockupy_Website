import React, { Component } from 'react';

class Nav extends Component {

  componentDidMount() {

    $(window).scroll(function () {
      if ($(window).scrollTop() < 60) {
        $('.navigation-wrapper').removeClass('fixed');
      }
      if ($(window).scrollTop() > 60) {
        $('.navigation-wrapper').addClass('fixed');
      }
    });
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <header>
          <nav>
            <ul>
              <li id="about"><a href="/about">About<span className="underline"></span></a></li>
              <li id="projects"><a href="/projects">Projects<span className="underline"></span></a></li>
              <li id="contact"><a href="/contact">Contact<span className="underline"></span></a></li>
            </ul>
          </nav>
          <h1 className="logo">
            <a href="/">
              <img src="/images/logo-black.png" />
            </a>
          </h1>
        </header>
      </div>
    );
  }
}

export default Nav;
