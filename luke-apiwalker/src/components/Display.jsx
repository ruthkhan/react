import React, { useState } from 'react'
import Form from './Form'

const Display = (props) => {
    const {details} = props

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h1 className="card-title mb-5">{ details.name }</h1>
                { Object.keys(details).slice(1,9).map((property, index) => {
                    let words = property.split("_")
                    let transformed = words.map((word) => {
                        return word[0].toUpperCase() + word.substring(1)
                    }).join(" ")
                    return <p key={index} className="card-text"><span className="fw-bold">{ transformed }: </span>{ details[property] }</p>
                })}
            </div>
        </div>
    )
}

export default Display