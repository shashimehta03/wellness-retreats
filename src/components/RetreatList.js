import React from 'react';
import RetreatCard from './RetreatCard';

const RetreatList = ({ retreats }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {retreats.map(retreat => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
};

export default RetreatList;
