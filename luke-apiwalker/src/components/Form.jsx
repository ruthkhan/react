import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const {resource, setResource, details, setDetails} = props
    const navigate = useNavigate()

    const handleVals = (e) => {
        setResource({ ...resource, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${resource.resourceType}/${resource.resourceId}`)
            .then(response => {
                return response.data
            })
            .then(response => {
                if (resource.resourceType=="people") {
                    axios.get(`${response.homeworld}`)
                        .then(result => {
                            return result.data
                        })
                        .then(result => {
                            console.log(result.name)
                            setDetails({ ...response, homeworld: result.name})
                            navigate(`/${resource.resourceType}/${resource.resourceId}`)
                        })
                } else {
                    setDetails(response)
                    navigate(`/${resource.resourceType}/${resource.resourceId}`)
                }
            })
            .catch(err => {
                console.log(err)
                navigate("/error")
            })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="row g-3 row-cols-lg-auto align-items-center">
                <div className="col-auto">
                    <label htmlFor="resourceType" className="">Search for: </label>
                </div>
                <div className="col-auto">
                    <select className="form-select" id="resourceType" name="resourceType" onChange={ handleVals }>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="resourceId" className="">ID: </label>
                </div>
                <div className="col-auto">
                    <input 
                        type="number" 
                        name="resourceId" 
                        id="resourceId"
                        className="form-control"
                        onChange={ handleVals }
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Form