import React, { Component } from 'react';

class LetsWork extends Component {

  componentDidMount() {

    $(window).scroll(function () {

      $('.wrapper').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $('.bar-left, .bar-right').css({
            height: '100%',
            transition: 'height 2s ease-in-out',
            backgroundColor: 'grey'
          });
        }
      });
    });
  }

  render() {
    return (
      <div className="lets-work hideme">
        <div className="wrapper">
          <span className="bar-left"></span>
          <span className="bar-right"></span>
          <div className="content">
            <h1 className="bg-animate">let&apos;s work</h1>
            <p>One Small Step Towards a Better Brand</p>
            <span id="link"><a href="/contact">Get Started</a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsWork;
