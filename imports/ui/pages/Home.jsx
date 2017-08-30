import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

class Home extends Component {
  componentWillMount() {
    //before component mounts
  }

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
      <div>
        <SideNav />
        <div className="header">
          <div className="header-box">
            <div className="navigation">
              <div className="menu">
                <a id="nav-btn" href="">menu</a>
              </div>
              <div className="logo-right">
                <h2>Ockupy</h2>
              </div>
            </div>
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
