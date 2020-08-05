import React from 'react';
import Card from './Card';
import recipes from '../recipes';

function createCard(recipe) {
  return <Card
  key = {recipe.id}
  name={recipe.name}
  img = {recipe.img}
  details = {recipe.details}
  />
}

function App() {
  return (
    <div className="flex-container">
    {recipes.map(createCard)};
    </div>
  );
}

export default App;
