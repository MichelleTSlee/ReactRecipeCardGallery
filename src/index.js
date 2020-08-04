import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const img = "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg";

ReactDOM.render(
  <div>
  <h1 className="header"> I love the following:</h1>

  <ul>
  <li>Coffee</li>
  <li>Wine</li>
  <li>Biscuits</li>
  </ul>
  <div>
    <img src={img} alt ="flower"/>
  </div>


  <p>Created by {`${fName} ${lName}`} </p>
  <p>Copyright {year}</p>
  </div>,
  document.getElementById('root')
);
