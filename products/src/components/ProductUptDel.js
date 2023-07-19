import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = async () => {
    try {
      const updatedProduct = { name, price };
      await axios.put(`http://localhost:8080/products/${product.id}`, updatedProduct);
      console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/products/${product.id}`);
      console.log('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const ProductUptDel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductUptDel;
