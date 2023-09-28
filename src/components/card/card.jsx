import './card.scss'
import Button from '../button/button'

const Card = ({ data, updateModal, setRelatedBook }) => {
    const viewButtonValue = "View"

    return (
        <div className="card-container">
            <div className="list-container">
                {data.data.books.map((book, index) => {
                    const genre_ = book.genre.join(", ")
                    const rating_ = book.rating
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
                    return <div key={index} className='list-items'
                        onClick={() => {
                            setRelatedBook(book);
                            updateModal();
                        }}>
                        <div className='image-container'>
                            <img src={book.image}></img>
                        </div>
                        <div className='list-details'>
                            <p className='title'><b>{book.title}</b></p>
                            <p className='author'>{book.author}</p>
                            <div className="star-container">{stars}</div>
                            <p className='price'>Price:  {book.price}</p>
                            <Button
                                value={viewButtonValue}
                                onClick={(e) => {
                                    setRelatedBook(book);
                                    updateModal();
                                }}
                                className='btn-style' />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card