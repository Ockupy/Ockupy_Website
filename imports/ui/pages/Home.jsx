import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import { LetsWork } from '../components/LetsWork';
import { ViewProjectsBtn } from '../components/Projects/ViewProjectsBtn';

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0,0);

    $('.logo').click(function () {
      $('html, body').animate({
        scrollTop: 0,
      }, 1000);
    });

    $(window).scroll(function () {
      $('.hideme').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
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
              <h1>we create</h1>
              <h1>things</h1>
            </div>
          </div>
          <div className="home-info">
            <div className="block-wrapper">
              <div className="block-one">
                <p>We are content creatives helping brands build unique and engaging experiences through digital products.</p>
                <span className="bar-1"></span>
              </div>
            </div>
            <div className="block-two-wrapper">
              <div className="block-two">
                <p>Ockupy is digital marketing creative agency based on a pier over the Hudson River. Our goal is to achieve presence through the digital culture with appealing designs.</p>
                <span className="bar-2"></span>
              </div>
            </div>
          </div>
          <FeaturedProjects />
          <ViewProjectsBtn />
          <LetsWork />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
