import './card.scss'
import Button from '../button/button'
import DeleteData from '../deleteData/deleteData'
import EditData from '../editData/editData'
import { useState } from 'react'

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
                    //set the form data for edit
                    const [editFormData, setEditFormData] = useState({
                        title: book.title,
                        author: book.author,
                        genre: book.genre,
                        description: book.description,
                        pages: book.pages,
                        price: book.price,
                        stock: book.stock,
                        branch: book.branch,
                        image: book.image
                    })
                    const onEditChangeHandler = (e) => {
                        // getting name and value pair from frontend
                        const { name, value } = e.target
                        // setting the name and value in the formdata object 
                        setEditFormData({ ...editFormData, [name]: value })
                    }
                    const handleEditBook = (editFormData) => {
                        // Make a POST request to your API endpoint
                        fetch(`http://localhost:8000/book/edit-book/${book._id}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(editFormData),
                        })
                            .then((response) => {
                                if (!response.ok) {
                                    alert("Something went wrong.")
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                response.json()
                            })
                            .then((data) => {
                                alert("Book Edited Successfully!")
                                console.log('Book edited successfully:', data);
                            })
                            .catch((error) => {
                                console.error('Error editing book:', error);
                            });
                    };
                    const onEditSubmitHandler = (e) => {
                        e.preventDefault();
                        handleEditBook(editFormData); // Call the handleAddBook function from your custom hook
                    };

                    // DELETE
                    const handleDeleteBook = () => {
                        fetch(`http://localhost:8000/book/delete-book/${book._id}`, {
                            method: 'DELETE',
                            // headers: {
                            //     'Content-Type': 'application/json',
                            // },
                            // body: JSON.stringify(editFormData),
                        })
                            .then((response) => {
                                if (!response.ok) {
                                    alert("Something went wrong.")
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                response.json()
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

                                <EditData title={editFormData.title}
                                    author={editFormData.author}
                                    genre={editFormData.genre}
                                    description={editFormData.description}
                                    pages={editFormData.pages}
                                    price={editFormData.price}
                                    stock={editFormData.stock}
                                    branches={editFormData.branch}
                                    image={editFormData.image}
                                    editFormData={editFormData}
                                    onEditChangeHandler={onEditChangeHandler}
                                    onEditSubmitHandler={onEditSubmitHandler}
                                />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card