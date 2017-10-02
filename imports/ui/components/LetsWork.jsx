import React, { Component } from 'react';

class LetsWork extends Component {

  componentDidMount() {
    $(window).scroll(function () {

      $('.wrapper').each(function (i) {
        var bottom_of_object = ($(this).position().top + $(this).outerHeight()) - 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
          $('.bar-left, .bar-right').css({
            height: '100%',
            transition: 'all 1.5s ease-in'
          });
        }
      });
    });
  }

  render() {
    return (
      <div className="lets-work hideme">
        <div className="wrapper">
          <i className="bar-left"></i>
          <i className="bar-right"></i>
          <div className="content">
            <h1 className="bg-animate">lets work</h1>
            <p>One Small Step Towards a Better Brand</p>
            <span id="link"><a href="/contact">Get Started</a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsWork;
