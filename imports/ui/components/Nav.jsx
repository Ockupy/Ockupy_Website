import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {

    $(window).scroll(function () {
      // console.log($(window).scrollTop());
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
              <li><a href="/about">About<span className="underline"></span></a></li>
              <li><a href="/projects">Projects<span className="underline"></span></a></li>
              <li><a href="/contact">Contact<span className="underline"></span></a></li>
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
