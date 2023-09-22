import React from 'react';


import Products from './Components/Products';
import NewProduct from './Components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Jack Sparrow',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'neha Kakkar', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function printProductData(data){
    console.log("final end app.js")
    console.log(data)

  }
 

  return (
    <div>
    <NewProduct coll= {printProductData}/>
  <Products items = {products}/>
    </div>
  );
}

export default App;