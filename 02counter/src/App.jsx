import { useState } from 'react'


import './App.css'

function App() {

  const [counter, faizCounter] = useState(15,)
  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);
//  let counter = 5
 const addValue = () => {
  // counter = counter + 1
  if( count <= 20){

    faizCounter(counter + 1)
  }
  console.log("Clicked", counter);
  
 }
 const removeValue = () => {
  // counter = counter + 1
  if(counter > 0){

    faizCounter(counter - 1)
  }
  console.log("Clicked", counter);
  
 }
 

  return (
    <>
      <h1>  chai aur React </h1>
      <h2>  Counter value is {counter} </h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
