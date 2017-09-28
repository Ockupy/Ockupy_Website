import React from 'react';

export const ProjectBlock = (props) => {
  return (
    <div className="project-container hideme">
        <div className="image">
          <img src={props.img} />
        </div>
        <div className="project-info">
          <div className="title">
            <h1>{props.title}</h1>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="link">
            <a href={props.link}>View</a>
          </div>
        </div>
    </div>
  );
}
