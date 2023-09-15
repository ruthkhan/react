import React, { useState } from 'react'
// import './App.css'
import BoxForm from './components/BoxForm.jsx'
import BoxDisplay from './components/BoxDisplay.jsx'

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([])

  return (
    <div className="container vw-100 vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex">
        <BoxForm 
          currentBoxes = { currentBoxes }
          setCurrentBoxes = { setCurrentBoxes } />
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <BoxDisplay currentBoxes = { currentBoxes } />
      </div>
    </div>
  )
}

export default App
