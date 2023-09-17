import React, { useState } from 'react'

const AddTask = (props) => {
    const { allTasks, setAllTasks } = props 

    const [ newTask, setNewTask ] = useState({
        id: crypto.randomUUID(),
        theTask: "", 
        isCompleted: false, 
    })

    const addTask = (e) => {
        setNewTask({ ...newTask, theTask:e.target.value })
    }

    const submitTask = (e) => {
        e.preventDefault()
        setAllTasks([...allTasks, newTask])
        setNewTask({
            id: crypto.randomUUID(),
            theTask: "", 
            isCompleted: false, 
        })
    }

    return (
        <form onSubmit = { submitTask } className="row row-cols-lg-auto g-3 align-items-center my-3">
            <div className="col-12">
                <input 
                    type="text" 
                    name="taskName" 
                    id="taskName" 
                    onChange={ addTask } 
                    value={ newTask.theTask }
                    className="form-control"
                />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default AddTask