import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Home extends Component {

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
      <div>
        <div className="header">
          <div className="header-box">
            <Nav
              navLogo='/images/logo-black.png'
             />
          </div>
          <div className="header-text">
            <h1>we create</h1>
            <h1>things</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
