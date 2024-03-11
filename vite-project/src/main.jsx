import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import Test from './Test.jsx'

// const reactElement = (
//     <a href='https://google.com' target='_blank'>Visit google</a>
// )

const reactElement = React.createElement('a', { href : 'https://google.com', target : '_blank'}, 'Click me to visit google')

// function App(reactElement){
//     return reactElement;
// }


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
