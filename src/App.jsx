import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor] = useState("#ffffff");
  
  const pickARandomColor = () => {
    setColor('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
  } 

  return (
    <>
    <button onClick={pickARandomColor}>Change</button>
    <div className='container' style={{backgroundColor:color}}>
      <h2>{color}</h2>
    </div>
    </>
  )
}

export default App
