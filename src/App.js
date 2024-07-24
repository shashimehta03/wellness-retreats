import React, { useState, useEffect } from 'react';
import RetreatCard from './components/RetreatCard';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import { getRetreats, searchRetreats, filterRetreats } from './utils/api';
import './App.css';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRetreats = async () => {
      const data = await getRetreats(page, 5);
      setRetreats(data);
    };
    fetchRetreats();
  }, [page]);

  const handleSearch = async (query) => {
    const data = await searchRetreats(query);
    setRetreats(data);
  };

  const handleFilterChange = async (field, value) => {
    const data = await filterRetreats(field, value);
    setRetreats(data);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Wellness Retreats</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="retreat-list">
        {retreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
