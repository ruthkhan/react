import { useState, useEffect } from 'react'
// import './App.css'
import AddTask from './components/addTask'
import DisplayTask from './components/displayTask'

function App() {
  // Code for storing to localStorage taken from https://community.codenewbie.org/mckennabramble/saving-data-to-localstorage-using-the-useeffect-react-hook-809
  const [allTasks, setAllTasks] = useState(() => { 
    const savedState = localStorage.getItem("stateString")
    const allTasks = JSON.parse(savedState)
    return allTasks || []
  })

  useEffect(() => {
    localStorage.setItem("stateString", JSON.stringify(allTasks))
  }, [allTasks])

  const deleteTask = (taskId) => {
    const activeTasks = allTasks.filter((oneTask) => {
      return oneTask.id !== taskId
    })
    setAllTasks(activeTasks)
  }

  const completeStatus = (e, taskId) => {
    const updateStatus = allTasks.map((oneTask) => {
      if (oneTask.id === taskId) {
        oneTask.isCompleted = e.target.checked
      }
      return oneTask
    })
    setAllTasks(updateStatus)
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card border-dark mb-3">
        <div className="card-header">
          <AddTask 
            allTasks = { allTasks }
            setAllTasks = { setAllTasks }
          />
        </div>
        <div className="card-body">
        <DisplayTask 
          allTasks = { allTasks } 
          deleteTask = { deleteTask }
          completeStatus = { completeStatus }
        />
        </div>
      </div>
    </div>
  )
}

export default App
