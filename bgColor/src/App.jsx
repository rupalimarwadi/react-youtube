import { useState } from 'react'
import './App.css'

function App() {
  const buttonColor = ['red', 'green', 'yellow', 'black', 'blue', 'brown'];
  let [color, setColor] = useState('olive');

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="flex justify-center bottom-12 flex-row" style={{backgroundColor:"white"}}>
        { buttonColor.map(item =>
            <button className='basis-1/4 border-2 border-inherit mx-2 rounded-lg p-3 capitalize text-stone-200' style={{ backgroundColor:item}} onClick={() => setColor(item)}>{ item }</button>
        )}
        </div>
      </div>
  )
}

export default App
