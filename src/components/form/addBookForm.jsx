import React, { useState, useEffect } from 'react';

function AddBookForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: [],
        description: '',
        pages: 0,
        price: 0,
        stock: 0,
        branch: [],
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add input fields for each property in your book schema */}
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
            <label>Author:</label>
            <input type="text" name="author" value={formData.author} onChange={handleInputChange} />
            <label>Genre:</label>
            <input type="text" name="genre" value={formData.genre} onChange={handleInputChange} />
            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
            <label>Price:</label>
            <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
            <label>Stock:</label>
            <input type="text" name="stock" value={formData.stock} onChange={handleInputChange} />
            <label>Pages:</label>
            <input type="text" name="pages" value={formData.pages} onChange={handleInputChange} />
            <label>Branches:</label>
            <input type="text" name="branch" value={formData.branch} onChange={handleInputChange} />
            <label>Image URL:</label>
            <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
            {/* Add more input fields for other properties (author, genre, pages, price, stock, etc.) */}

            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookForm;