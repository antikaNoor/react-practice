import './bookModal.scss'
import Button from '../button/button'

export default function BookModal({ updateModal, relatedBook }) {
    const genre_ = relatedBook.genre.join(", ")

    const rating_ = relatedBook.rating
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating_)) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>)
        }
        else if (i < rating_ && i === Math.floor(rating_)) {
            stars.push(<i className="fa-solid fa-star-half-stroke" key={i}></i>)
        }
        else {
            stars.push(<i className="fa-regular fa-star" key={i}></i>);
        }
    }

    const addToCart = "Add to Cart"
    return (
        <div className='bookModal-container'>
            <div className='bookModal-item'>
                <i className="fa-solid fa-x" onClick={updateModal}></i>
                <div className='modal-overlay'>
                    <img className='book-img' src={relatedBook.image}></img>
                    <div className='info-container'>
                        <p className='title'><b>{relatedBook.title}</b></p>
                        <p className='author'>{relatedBook.author}</p>
                        {/* {relatedBook.rating && <p>Rating: {relatedBook.rating}</p>} */}
                        {relatedBook.rating && <div className="star-container">{stars}</div>}
                        <p className='genre'>{genre_}</p>
                        <p className='description'>{relatedBook.description}</p>
                        {/* <p>Price: {relatedBook.price}</p> */}
                        {/* {relatedBook.stock > 20 ? <p>Stock:  {relatedBook.stock}</p> : <p style={styling.infoStyle}>Stock:  {relatedBook.stock}</p>} */}
                    </div>
                    <div className='button-container'>
                    <Button
                        value={addToCart}
                        onClick={(e) => {
                            alert("Successfully added to cart!")
                        }}
                        className='btn-style' />
                    </div>
                </div>
            </div>
        </div>
    )
}
