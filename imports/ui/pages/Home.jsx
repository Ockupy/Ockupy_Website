import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SideScroll from '../components/SideScroll';

class Home extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <Nav
          navLogo='/images/logo-black.png'
        />
        <SideScroll />
        <div className="page-content-wrapper">
          <div className="ockupy-header">
            <h1>Ockypy</h1>
            <h1>We Make it Happen!</h1>
          </div>
          <div className="content-box"></div>
          <div className="featured-content">
            <div className="featured-text">
              <h2>Featured Stuff</h2>
              <p>Check some stuff out</p>
            </div>
            <div className="featured-wrapper">
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
              <div className="block"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
