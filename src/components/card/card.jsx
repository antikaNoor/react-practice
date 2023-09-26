import './card.scss'
import Button from '../button/button'

const Card = ({ data, updateModal, setRelatedBook }) => {
    const buttonValue = "Add to Cart"
    const viewButtonValue = "View"
    const styling = {
        lowStock: {
            color: "red"
        }
    }
    return (
        <div className="card-container">
            <div className="list-container">
                {data.data.books.map((book, index) => {
                    const genre_ = book.genre.join(", ")
                    return <div key={index} className='list-items'
                        onClick={() => {
                            setRelatedBook(book);
                            updateModal();
                            alert('card clicked');
                        }}>
                        <div className='image-container'>
                            <img src={book.image}></img>
                        </div>
                        <div className='list-details'>
                            <p><b>{book.title}</b></p>
                            <p>Author:  {book.author}</p>
                            <p>Price:  {book.price}</p>
                            <Button
                                value={viewButtonValue}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setRelatedBook(book);
                                    updateModal();
                                    alert('button clicked');
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