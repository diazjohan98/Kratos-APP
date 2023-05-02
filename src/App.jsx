import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { KratosApp } from './KratosApp'
import { BrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <KratosApp />
      </BrowserRouter>
    </>
  )
}

export default App
