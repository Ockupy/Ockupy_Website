import React, { Component } from 'react';
import Nav from '../components/Nav';
import LetsWork from '../components/LetsWork';
import Footer from '../components/Footer';
import { AboutContent } from '../components/About/About-Content';
import { AboutServices } from '../components/About/About-Services';
import { ViewProjectsBtn } from '../components/Projects/ViewProjectsBtn';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0,0);

    $('#about').addClass('active');

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
        <Nav />
        <div className="page-content-wrapper">
          <AboutContent />
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
