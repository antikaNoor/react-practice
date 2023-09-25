import { useState, useEffect } from 'react'
import './button.scss'
const Button = ({ value }) => {

    return (
        <div className='button-container'>
            <button className='style-button'>{value}</button>
        </div>
    )
}

export default Button