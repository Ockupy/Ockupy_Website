import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AboutServices } from '../components/About-Services';
import { LetsWork } from '../components/LetsWork';


class About extends Component {

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
            <h1>we do</h1>
            <h1>this</h1>
          </div>
          <div className="about-info">
            <div className="block-wrapper">
              <div className="block">
                <p>Putting together a marketing campaign or building a new website requires many different inputs. These projects require strategy, design, development, and media. Trying to work with multiple companies and freelancers can complicate the process and result in a poor product.</p>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block">
                <p>Everything we create, we do in house. Brand Development, photography, design, social media marketing, web development - every digital service is produce in our studio where each team can actively collaborate on projects to produce the best possible website, app, or marketing.</p>
              </div>
            </div>
          </div>
          <AboutServices />
          <LetsWork />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
