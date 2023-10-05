import './card.scss'
import Button from '../button/button'
import DeleteData from '../deleteData/deleteData'
import SetInitialData from '../editData/setInititalData'
import { axiosInstance } from '../../utils/axiosInstance'

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

                    // DELETE
                    const handleDeleteBook = () => {
                        axiosInstance
                            .delete(`/book/delete-book/${book._id}`)
                            .then((response) => {
                                if (response.status !== 200) {
                                    alert("Something went wrong.")
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                return response.data
                            })
                            .then((data) => {
                                alert("Book Deleted Successfully!")
                                console.log('Book deleted successfully:', data);
                            })
                            .catch((error) => {
                                console.error('Error deleting book:', error);
                            });
                    };
                    const onDeleteSubmitHandler = (e) => {
                        e.preventDefault();
                        handleDeleteBook(); // Call the handleAddBook function from your custom hook
                    };

                    return <div key={index} className='list-items'>
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
                                }} />
                            <div className='edit-delete-btn-container'>
                                <DeleteData onDeleteSubmitHandler={onDeleteSubmitHandler} />

                                <SetInitialData bookId={book._id}
                                    title={book.title}
                                    author={book.author}
                                    genre={book.genre}
                                    description={book.description}
                                    pages={book.pages}
                                    price={book.price}
                                    stock={book.stock}
                                    branch={book.branch}
                                    image={book.image} />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card