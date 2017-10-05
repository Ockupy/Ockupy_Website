import React, { Component } from 'react';
import Swiper from 'swiper';

class Slider extends Component {
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
      mousewheelControl: false
    });
  }

  slides() {
    return this.props.slides;
  }

  renderSlides() {
    return this.slides().map(slide => {
      return (
        <div className="swiper-slide" key={slide._id}>
          <img className="swiper-slide-image" src={slide.src} />
        </div>
      );
    });
  }


  render() {
    return (
      <div className="swiper-container">

        <div className="swiper-wrapper">
          {this.renderSlides()}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}


export default Slider;
