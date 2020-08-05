import React from 'react';

function Picture(props) {
  return (
    <div className = "picture">
      <img src={props.img} alt ="food"/>
    </div>
  );
}


export default Picture;
