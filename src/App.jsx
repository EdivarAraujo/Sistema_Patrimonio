
import { useState } from 'react'
import logo from './logo.svg'
import Routes from "./routes"

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes/>
    </div>
  )
}

export default App
