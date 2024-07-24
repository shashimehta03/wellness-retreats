import React, { useState, useEffect } from 'react';
import { fetchRetreats, searchRetreats } from '../utils/api';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import RetreatList from '../components/RetreatList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [retreats, setRetreats] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadRetreats = async () => {
      let data;
      if (searchTerm) {
        data = await searchRetreats(searchTerm);
      } else {
        data = await fetchRetreats(currentPage, 5, filters);
      }
      setRetreats(data);
    };

    loadRetreats();
  }, [currentPage, filters, searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Wellness Retreats</h1>
      </header>
      <Filter filters={filters} setFilters={setFilters} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RetreatList retreats={retreats} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
