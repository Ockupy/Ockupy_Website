import React from 'react';

export const ProjectBlock = (props) => {
  return (
    <div className="project-container">
      <div className="image">
        <img src="" />
      </div>
      <div className="project-info">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
