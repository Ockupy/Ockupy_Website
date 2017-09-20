import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/Projects/FeaturedProjects';

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
        <div className="page-content-wrapper">
          <div className="content-box">
            <h1>we create</h1>
            <h1>things</h1>
          </div>
          <div className="home-info">
            <div className="block-one">
              <p>We are content creatives helping brands build unique and engaging experiences through digital products.</p>
              <span className="bar-1"></span>
            </div>
            <div className="block-two">
              <p>Ockupy is digital marketing creative agency based on a pier over the Hudson River. Our goal is to achieve presence through the digital culture with appealing designs.</p>
              <span className="bar-2"></span>
            </div>
          </div>
          <FeaturedProjects />
          <div className="lets-work">
            <div className="wrapper">
              <div className="content">
                <h1>lets work</h1>
                <p>One Small Step Towards a Better Brand</p>
                <span id="link"><a href="/contact">Get Started</a></span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
