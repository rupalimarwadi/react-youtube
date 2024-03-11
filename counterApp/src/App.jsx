import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  
  const addCounter = () => { 
    setCounter((counter === 20)  ? counter : counter + 1 );
  }
  const removeCounter = () => { 
    setCounter((counter === 0)  ? counter  : counter - 1 );
  }

  return (
    <>
      <h1> Counter : { counter }</h1>
      <button onClick={addCounter}>Add Counter {counter}</button> 
      <button onClick={removeCounter}>Remove Counter {counter}</button>
    </>
  )
}

export default App
