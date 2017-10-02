import React from 'react';

export const HomeContent = () => {
  return (
    <div>
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
    </div>
  );
}
