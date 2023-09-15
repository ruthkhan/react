import React, { useState } from 'react'

const BoxDisplay = (props) => {
    const { currentBoxes } = props

    return currentBoxes.map((properties) => (
        <div 
            key = { properties.id }
            style = {{width:properties.size+'px', height:properties.size+'px', background:properties.colour}}
            className = "m-3">
        </div>
    ))
}
    
export default BoxDisplay