import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
import Error from './components/Error'

function App() {
  
  const [details, setDetails] = useState({})
  const [resource, setResource] = useState({
    resourceType: "people",
    resourceID: "",
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form 
          details = { details } 
          setDetails = { setDetails }
          resource = { resource }
          setResource = { setResource }
          />} /> 
        <Route path="/:resource/:resourceId" element={<>
          <Form 
            details = { details } 
            setDetails = { setDetails }
            resource = { resource }
            setResource = { setResource }
          />
          <Display 
            details = { details }
          />
        </>} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
