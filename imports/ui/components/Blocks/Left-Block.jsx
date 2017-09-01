import React, { Component } from 'react';

export const LeftBlock = (props) => (
  <div className="content">
    <div className="wrapper">
      <div className="left block"></div>
      <div className="text">
        <p>{props.blockText}</p>
      </div>
    </div>
  </div>
);
