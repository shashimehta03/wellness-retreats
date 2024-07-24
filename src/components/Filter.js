import React from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => (
  <div className="filter">
    <select onChange={(e) => onFilterChange('type', e.target.value)}>
      <option value="">Select Type</option>
      <option value="Yoga">Yoga</option>
      <option value="Meditation">Meditation</option>
      <option value="Detox">Detox</option>
    </select>
    <select onChange={(e) => onFilterChange('date', e.target.value)}>
      <option value="">Select Date</option>
      <option value="2024-07-01">2024-07-01</option>
      <option value="2024-07-15">2024-07-15</option>
      <option value="2024-08-01">2024-08-01</option>
    </select>
  </div>
);

export default Filter;
