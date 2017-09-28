import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AboutServices } from '../components/About-Services';
import { LetsWork } from '../components/LetsWork';
import { ViewProjectsBtn } from '../components/Projects/ViewProjectsBtn';


class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    $(window).scroll(function () {
      $('.hideme').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $(this).css({
            opacity:1,
            transition:'all .6s ease-in-out',
            top:'0em'
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Nav
          navLogo='/images/logo-black.png'
        />
        <div className="page-content-wrapper">
          <div className="content-box">
            <div className="mask">
              <h1>we do</h1>
              <h1>this</h1>
            </div>
          </div>
          <div className="about-info">
            <div className="block-wrapper hideme">
              <div className="block ">
                <p>Putting together a marketing campaign or building a new website requires many different inputs. These projects require strategy, design, development, and media. Trying to work with multiple companies and freelancers can complicate the process and result in a poor product.</p>
                <span></span>
              </div>
            </div>
            <div className="block-wrapper hideme">
              <div className="block-2">
                <p>Everything we create, we do in house. Brand Development, photography, design, social media marketing, web development - every digital service is produce in our studio where each team can actively collaborate on projects to produce the best possible website, app, or marketing.</p>
                <span></span>
              </div>
            </div>
          </div>
          <AboutServices />
          <ViewProjectsBtn />
          <LetsWork />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
