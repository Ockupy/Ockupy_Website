import React, { Component } from 'react';

export const RightBlock = (props) => (
  <div className="content">
    <div className="wrapper">
      <div className="text">
        <p>{props.blockText}</p>
      </div>
      <div className="block left"></div>
    </div>
  </div>
);
