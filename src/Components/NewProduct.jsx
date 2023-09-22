import React from 'react'
import ProductForm from './ProductForm'
import './NewProduct.css'
export default function NewProduct(props) {

  function saveProduct(product){
    console.log("hello newproduct ") //neche se save product se yha aaya  usko props .colection k zariye app.js me send kiya
    console.log(product)
props.coll(product)
  }
  return (
  <>
   <div className='new-product'>
   <ProductForm onSaveProduct={saveProduct}/>
   </div>
  </>
  )
}
