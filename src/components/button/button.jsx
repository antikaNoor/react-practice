import { useState, useEffect } from 'react'
import './button.scss'
const Button = ({ value, onClick, className }) => {

    return (
        <div className='button-container'>
            <button className={className} onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button