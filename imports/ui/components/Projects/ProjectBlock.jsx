import React from 'react';

export const ProjectBlock = (props) => {
  return (
      <div className="project-container">
        <a style={{ textDecoration: 'none', pointer: 'cursor' }} href={'/projects/' + props.link}>
          <div className="image">
            <img src={props.img} />
          </div>
          <div className="project-info">
            <div className="title">
              <h2>{props.title}</h2>
            </div>
            <div className="description">
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      </div>
  );
}
