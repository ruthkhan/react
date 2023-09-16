import { useState } from 'react'
import Tabs from './Components/Tabs'
import './App.css'

function App() {
  const itemOne = {
    id: 1,
    label: 'Tab 1', 
    content: 'Tab 1 content is showing here.', 
    state: false
  }
  const itemTwo = {
    id: 2,
    label: 'Tab 2', 
    content: 'Tab 2 content is showing here.', 
    state: false
  }
  const itemThree = {
    id: 3,
    label: 'Tab 3', 
    content: 'Tab 3 content is showing here.', 
    state: false
  }
  const [array, setArray] = useState([itemOne, itemTwo, itemThree])
  const [selectContent, setSelectContent] = useState("")

  return (
    <>
      <Tabs 
        array = { array } 
        setArray = { setArray }
        selectContent = { selectContent } 
        setSelectContent = { setSelectContent } />
      <div className="card mt-3">
        <p className="card-text text-start">{ selectContent }</p>
      </div>
    </>
  )
}

export default App
