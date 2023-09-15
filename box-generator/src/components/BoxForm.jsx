import React, { useState } from 'react'

const BoxForm = (props) => {
    const { currentBoxes, setCurrentBoxes } = props

    const [boxProperties, setBoxProperties] = useState({
        colour: "",
        size: "",
    })

    const handleVals = (e) => {
        setBoxProperties({...boxProperties, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentBoxes([...currentBoxes, boxProperties]) 
        setBoxProperties({
            colour:"",
            size:"",
        })
    }

    return (
        <div className="align-self-center">
            <form onSubmit={ handleSubmit } className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <div className="input-group">
                        <label htmlFor="colour" className="input-group-text">Color</label>
                        <input 
                            type="text" 
                            name="colour" 
                            id="colour" 
                            value={ boxProperties.colour } 
                            onChange={ handleVals }
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <label htmlFor="size" className="input-group-text">Size</label>
                        <input
                            type="number"
                            name="size"
                            id="size"
                            value={ boxProperties.size }
                            onChange={ handleVals }
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>

    )
}

export default BoxForm