import React from 'react';

export const FullImage = (props) => {
  return (
    <div
      className="full-img" 
      style={{backgroundImage: `url('${props.image}')`}}>
    </div>
  );
}
