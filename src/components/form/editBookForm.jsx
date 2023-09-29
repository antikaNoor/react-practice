import React, { useState, useEffect } from 'react';

function EditBookForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: ''
    });
    const [fetchedData, setFetchedData] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData.id)
        const fetchBooks = () => {
            // Fetch data from API
            fetch(`http://localhost:8000/book/edit-book/formData.id`)
                .then((response) => response.json())
                .then((result) => {

                    setFetchedData(result)
                })
                .catch((error) => console.error(error))
        }
        // onSubmit(formData);
        console.log(fetchedData)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add input fields for each property in your book schema */}
            <label>Book Id:</label>
            <input type="text" name="id" value={formData._id} onChange={handleInputChange} />


            <button type="submit">Enter</button>
        </form>
    );
}

export default EditBookForm;