import React, { Component } from 'react';
import Swiper from 'swiper';

class Slider extends Component {
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      mousewheelControl: false,
      speed: 400,
      autoplay: 2000
    });
  }

  slides() {
    return this.props.slides;
  }

  // renderSlides() {
  //   return this.slides().map(slide => {
  //     return (
  //       <div className="swiper-slide" key={slide._id}>
  //         <img className="swiper-slide-image" src={slide.image} />
  //       </div>
  //     )
  //   })
  // }


  render() {
    return (
      <div className="swiper-container">

        <div className="swiper-wrapper"></div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}


export default Slider;
