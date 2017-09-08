import React from 'react';

export const ProjectBlock = (props) => {
  return (
    <div className="project-container">
      <div className="image">
        <img src={props.img} />
      </div>
      <div className="project-info">
        <div className="title">
          <a href={'/projects/' + props.link}><h2>{props.title}</h2></a>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
