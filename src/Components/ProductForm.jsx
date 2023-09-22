import React from 'react'
import { useState } from 'react'
import './ProductForm'
export default function ProductForm(props) {
let [newtitle,settitle] = useState("")
let [newdate,setdate] = useState("")
// let[data,setdata]= useState({
//   title:"",
//   date:""
// })
// function getdata(e){
//   var title = e.target.title
//   var value = e.target.value
//   setdata((old)=>{
//     return {
//       ...old,
//       [title]:value
//     }
//   })

// }

function titleChangeHandler(e){
  console.log(e.target.value)
settitle(e.target.value)
}

function dateChangeHandler(e){
  setdate(e.target.value)

}

function submitHandler(e) {
  e.preventDefault();

  const productData = {
      title:newtitle,
      date:newdate
  };
  props.onSaveProduct(productData);

  settitle('')
  setdate('')
}
// function clickSubmit(e){
//   e.preventDefault()
//  console.log(
//   `
//   title: ${data.title}
//   data: ${data.date}
//   `
//  )


  return (
    <>
         <form onSubmit={submitHandler}>
              <div>
              <label>Tittle</label>
                <input type='text' name='text' id='txt' value={newtitle}  onChange={titleChangeHandler} placeholder='type the title'/>
              </div>
              <div>
              <label>Date</label>
                <input type='date' name='text' id='txt' value={newdate} onChange={dateChangeHandler} placeholder='type the title'/>
              </div>
              <div>
              <button type='submit'>Add </button>
              </div>
            </form>
    </>
  )
}
