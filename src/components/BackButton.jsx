import React from 'react'
import "./backbutton.css"
function BackButton(props) {
    return (
        <button className='back-button' onClick={() => props.setSearchOn(false)}>Back</button>
    )
}

export default BackButton