import React from 'react';
import Cart from './Cart.js';

const item = [
  {
    id : 1,
    name : "PachaMolaga",
    price : 1.99,
    qty : 2
  },
  {
    id : 2,
    name : "Kothavaranga",
    price : 2.25,
    qty : 3
  },
  {
    id : 3,
    name : "Karamani",
    price : 3.50,
    qty : 1
  }
]

const App = () => {
  return(
    <div>
    <h1>Hello</h1>
    <Cart initialItems = {item} />
    </div>
    )
};

export default App;
