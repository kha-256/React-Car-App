import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

function ProductDetail({ searchTerm }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product detail based on ID
    fetchProductDetail();
  }, [id, searchTerm]);

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`/products.json`);
      const data = await response.json();
      const filteredData = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const product = filteredData.find((p) => p.id === parseInt(id));
      setProduct(product);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <div className='product-image'>
        <img src={product.image} alt="" className="carimages" />
      </div>
      <div className='product-details'>
        <h1>{product.name}</h1>
        <p style={{ color: 'darkgray' }}>{product.description}</p>
        <p style={{ fontSize: '20px' }}><b>Price:</b> {product.price}</p>
        <p style={{ fontSize: '20px' }}><b>Manufacturer:</b> {product.manufacturer}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
