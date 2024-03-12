import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card'
import './App.css'

function App() {
  let userInfo1 = {
    name:"Rupali",
    gender:"female"
  }
  let userInfo2 = {
    name:"Priya",
    gender:"female"
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind test</h1>
      <br/>
      <Card channel="youtube" userInfo={userInfo1} btnText="Click Me"/>
      <Card channel="youtube" userInfo={userInfo2} />
    </>
  )
}

export default App
