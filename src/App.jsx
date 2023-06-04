import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from JSON file
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App">
      <Header onSearch={handleSearch} />
      <div>
      <Routes>
          <Route
            path="/"
            element={<Home products={products} searchTerm={searchTerm} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} searchTerm={searchTerm} />}
          />
        </Routes>
      </div> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
