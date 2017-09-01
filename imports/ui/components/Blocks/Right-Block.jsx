import React, { Component } from 'react';

export const RightBlock = (props) => (
  <div className="content">
    <div className="wrapper">
      <div className="right block"></div>
      <div className="text">
        <p>{props.blockText}</p>
      </div>
    </div>
  </div>
);
