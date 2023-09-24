import React, { useState } from 'react'
import obiwan from '../assets/obiwan.jpg'

const Error = (props) => {

    return (
        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title mb-5">These aren't the droids you're looking for</h3>
            </div>
            <img src={obiwan} className="card-img-bottom"/>
        </div>
    )
}

export default Error