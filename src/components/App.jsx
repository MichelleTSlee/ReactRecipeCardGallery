import React from 'react';
import Card from './Card';


function App() {
  return (
    <div className="flex-container">
      <Card img = "https://picsum.photos/200" name = "Michelle" email="sleemichelle@" tel="01234"/>
      <Card img = "https://picsum.photos/200" name = "Peter" email="sleepeter@" tel="12345"/>
      <Card img = "https://picsum.photos/200" name = "Demi" email="sleedemi@" tel="23456"/>
    </div>
  );
}

export default App;
