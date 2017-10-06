import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import LetsWork from '../components/LetsWork';
import { HomeContent } from '../components/Home-Content';
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
      if ( $(this).scrollTop() > 200 ) {
        $('.bar-1').addClass('animate-bar');
      }

      $('.hideme').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if ( bottom_of_window > bottom_of_object ){
          $(this).css({
            opacity: 1,
            filter: 'alpha(opacity=100)',
            transition:'all .9s ease',
            Moztransition:'all .9s ease',
            top:'0em'
          });
        }
      });// end hideme

      //animate home page :before
      $('.block-one').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $('.block-one').addClass('animate');
        }
      });

      $('.bar-2').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $(this).css({
            height: '100%',
            transition: 'all 2s ease',
            transitionDelay: '1s',
            MozTransition: 'all 2s ease',
            MozTransitionDelay: '1s'
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <div id="desktop-sites">
          <Nav />
          <div className="page-content-wrapper">
            <HomeContent />
            <FeaturedProjects />
            <ViewProjectsBtn />
            <LetsWork />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
