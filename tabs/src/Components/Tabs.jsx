import React, { useState } from 'react'

const Tabs = (props) => {
    const { array, setArray, selectContent, setSelectContent } = props

    const selectTab = (tabId) => {
        const modifiedState = [...array].map((tab) => {
            if (tab.id === tabId) {
                tab.state = true
                setSelectContent(tab.content)
            } else {
                tab.state = false
            }
            return tab
        })
        setArray(modifiedState)
    }    

    return array.map( (tab) => (
        <button 
            type="button" 
            className={`btn mx-2 ${tab.state ? 'btn-dark': 'btn-outline-dark'}`} 
            key={ tab.id }
            onClick={ () => selectTab(tab.id) }>
            { tab.label }
        </button>
    ))
}

export default Tabs