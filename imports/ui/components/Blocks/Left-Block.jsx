import React, { Component } from 'react';

export const LeftBlock = (props) => (
  <div className="content">
    <div className="wrapper">
      <div className="block"></div>
      <div className="text right">
        <p>{props.blockText}</p>
      </div>
    </div>
  </div>
);
