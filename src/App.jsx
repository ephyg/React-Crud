import { useState } from 'react'
import './App.css'
import Create from './create/create'
import Read from './read/read'
import Update from './update/update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="app">
        <h1>CRUD</h1>
        <Routes>
          <Route  path='/' Component={Create}/>
          <Route path='/read' Component={Read}/>
          <Route path='/update' Component={Update}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
