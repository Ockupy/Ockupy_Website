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
            filter: 'alpha(opacity=100)',
            transition:'all .8s ease',
            // transform: 'translateY(-100px)',
            top:'0em'
          });
        }
      });// end hideme
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
            <div className="mask bg-animate">
              <h1>we create</h1>
              <h1>things</h1>
            </div>
          </div>
          <div className="home-info">
            <div className="block-wrapper">
              <div className="block-one">
                <p>We are a creative agency whose goal is to achieve presence through the digital culture with appealing designs and quality content, while leveraging our clients’ companies through our influencer network. </p>
                <span className="bar-1"></span>
              </div>
            </div>
            <div className="block-two-wrapper">
              <div className="block-two">
                <p>Ockupy is a full service digital marketing and business services firm that helps brands not only launch impactful campaigns across multiple platforms, but also provides the infrastructure to build and run a successful business. </p>
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
