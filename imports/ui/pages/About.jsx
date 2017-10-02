import React, { Component } from 'react';
import Nav from '../components/Nav';
import LetsWork from '../components/LetsWork';
import Footer from '../components/Footer';
import { AboutServices } from '../components/About-Services';
import { ViewProjectsBtn } from '../components/Projects/ViewProjectsBtn';


class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    $('.block-wrapper').filter(':nth-child(1)').removeClass('hideme');

    $(window).scroll(function () {

      $('.block').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $('.about-bar-1').css({
            height: '100%',
            transition: 'all 2.5s ease'
          });
        }
      });

      $('.block-2').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $('.about-bar-2').css({
            height: '100%',
            transition: 'all 2.5s ease',
            transitionDelay: '1.5s'
          });
        }
      });

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
            <div className="mask bg-animate">
              <h1>we do</h1>
              <h1>this</h1>
            </div>
          </div>
          <div className="about-info">
            <div className="block-wrapper hideme">
              <div className="block">
                <p>We attain all the resources to form a successful marketing campaign as well as build unique websites. We provide a wide range of tools to help brands develop and curate their message, market their products and services, and scale their business - all in one place.</p>
                <span className="about-bar-1"></span>
              </div>
            </div>
            <div className="block-wrapper hideme">
              <div className="block-2">
                <p>All our activities and everything we create are done in-house: brand development, videography and photography, graphic design, social media marketing, and web development. Having all the digital services produced in our studio office allows our team to actively collaborate on projects to produce the best marketing content, websites, and apps for our clients.</p>
                <span className="about-bar-2"></span>
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
