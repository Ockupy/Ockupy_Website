import React from 'react';

export const FullImage = (props) => {
  return (
    <div className="full-img">
      <img src={props.image} />
    </div>
  );
}
