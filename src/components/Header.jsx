import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <img src="/images/logo.png" alt="" className="logo" onClick={navigateToHome} />
      </div>
      <div className="headerSearch">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for any product"
            className="searchInput"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
