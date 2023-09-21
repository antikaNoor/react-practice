import { useState, useEffect } from 'react'
import './button.css'
const Button = ({ onDataFetched }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Fetch data from API
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error(error))
    }, [])

    const handleButtonClick = () => {
        onDataFetched(data)
    }
    return (
        <div>
            <button className='style-button' onClick={handleButtonClick}>Click here!</button>
        </div>
    )
}

export default Button