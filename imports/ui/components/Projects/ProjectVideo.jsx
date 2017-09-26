import React from 'react';

export const ProjectVideo = (props) => {
  return (
    <div className="project-video">
      <iframe src={props.source} allowFullScreen></iframe>
    </div>
  );
}
