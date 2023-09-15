import React, {useState} from 'react'

const Main = (props) => {
    return (
        <div className="main">
            <div className="top">
                { props.children }
            </div>
            { props.bottom }
        </div>
    )
}

export default Main