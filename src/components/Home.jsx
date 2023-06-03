import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home({ products, searchTerm }) {
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
);


  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="home">
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt="" className="car-images" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button
              onClick={() => viewProductDetails(product.id)}
              className="viewButton"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
