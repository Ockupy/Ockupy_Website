import React from 'react';

export const LastImage = (props) => {
  return (
    <div
      className="last-img"
      style={{backgroundImage: `url('${props.image}')`}}>
    </div>
  )
}
