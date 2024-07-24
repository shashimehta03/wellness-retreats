import React from 'react';
import './RetreatCard.css';

const RetreatCard = ({ retreat }) => (
  <div className="retreat-card">
    <img src={retreat.image} alt={retreat.title} className="retreat-image" />
    <h2 className="retreat-title">{retreat.title}</h2>
    <p className="retreat-description">{retreat.description}</p>
    <p className="retreat-date">{retreat.date}</p>
    <p className="retreat-location">{retreat.location}</p>
    <p className="retreat-price">${retreat.price}</p>
  </div>
);

export default RetreatCard;
