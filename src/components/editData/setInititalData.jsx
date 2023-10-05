import React from 'react'
import { useState, useEffect } from 'react'
import EditData from './editData'
import { axiosInstance } from '../../utils/axiosInstance'

function setInititalData({ bookId, title, author, genre, description, pages, price, stock, branch, image, }) {
    //set the form data for edit
    const [editFormData, setEditFormData] = useState({
        title,
        author,
        genre,
        description,
        pages,
        price,
        stock,
        branch,
        image
    })

    const onEditChangeHandler = (e) => {
        // getting name and value pair from frontend
        const { name, value } = e.target
        // setting the name and value in the formdata object 
        setEditFormData({ ...editFormData, [name]: value })
    }

    const handleEditBook = (editFormData) => {
        // Make a POST request to your API endpoint
        axiosInstance
            .patch(`/book/edit-book/${bookId}`, editFormData)
            .then((response) => {
                if (response.status !== 200) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.data
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

    return (
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
    )
}

export default setInititalData