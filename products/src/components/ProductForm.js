import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { name, price };

        try {
            await axios.post('http://localhost:8080/products', newProduct);
            setName('');
            setPrice('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ProductForm;
