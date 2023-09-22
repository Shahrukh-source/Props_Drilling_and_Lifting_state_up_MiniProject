import React from 'react'
import Product from './component/Product'

export default function Ap() {
    let response = [
        {
            Id:"1",
            title:"nirma",
            amount:100,
            date : new Date(2021 , 8 , 10)
        },
        {
            Id:"2",
            title:"Tide",
            amount:100,
            date : new Date(2021 , 8 , 10)
        },
        {
            Id:"3",
            title:"Sirf Excel",
            amount:100,
            date : new Date(2021 , 8 , 10)
        },
        {
            Id:"4",
            title:"Harpic",
            amount:100,
            date : new Date(2021 , 8 , 10)
        },
    ]
    
  return (
    <>
    {/* <Product id={response[0].Id} title={response[0].title} amount={response[0].amount} date={response[0].date}></Product>
    <Product id={response[1].Id} title={response[1].title} amount={response[1].amount} date={response[1].date}></Product>
    <Product id={response[2].Id} title={response[2].title} amount={response[2].amount} date={response[2].date}></Product>
    <Product id={response[3].Id} title={response[3].title} amount={response[3].amount} date={response[3].date}></Product>
         */}
         <Product item={response}/>
    </>
  )
}
