import React from 'react';

const img = "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg";

function Card(props) {
  return (
    <div className = "card">
      <img src={props.img} alt ="random image"/>
      <h2> {props.name} </h2>
      <p> {props.email} </p>
      <p> {props.tel} </p>
    </div>
  );
}


export default Card;
