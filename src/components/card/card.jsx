import Button from '../button/button'
import './card.css'

const Card = ({ data }) => {
    return (
        <div className="card-container">
            <ul className="list-container">
                {data.products.map((product, index) => {
                    return <li key={index} className='list-items'>
                        <img src={product.images[0]}></img>
                        <p><b>{product.title}</b></p>
                        <p>Price:  {product.price}</p>
                        <p>Rating:  {product.rating}</p>
                        <p>Stock:  {product.stock}</p>
                        <a href={product.thumbnail} target='_blank'>View Image</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Card