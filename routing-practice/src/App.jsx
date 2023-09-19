import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Input from './components/Input'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color1/:color2" element={<Input />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
