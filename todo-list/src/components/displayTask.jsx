import React, { useState } from 'react'

const DisplayTask = (props) => {
    const { allTasks, deleteTask, completeStatus } = props 

    return allTasks.map((oneTask) => (
        <div className="row row-cols-lg-auto g-3 align-items-center mb-2" key={ oneTask.id }>
            <div className="col-12">
                <label 
                    className={`form-check-label mx-3 ${oneTask.isCompleted ? 'text-decoration-line-through':''}`} 
                    htmlFor='completed'>
                    { oneTask.theTask }
                </label>
                <input 
                    className="form-check-input" 
                    type='checkbox' 
                    name='completed' 
                    id='completed'
                    checked={ oneTask.isCompleted }
                    onChange={ (e) => completeStatus(e, oneTask.id) }/>
            </div>
            <div className="col-12">
                <button className="btn btn-secondary" onClick={() => deleteTask(oneTask.id) }>Delete</button>
            </div>
        </div>
    ))
}

export default DisplayTask