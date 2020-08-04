import React from 'react';

const img = "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg";

function Heading() {
  return (
    <div>
      <h1>I love the following </h1>
      <img src={img} alt ="flower"/>
    </div>
  );
}

export default Heading;
