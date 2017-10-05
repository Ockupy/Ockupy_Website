import React from 'react';

export const ProjectVideo = (props) => {
  return (
    <div className="project-video">
      <iframe src={props.source} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}
