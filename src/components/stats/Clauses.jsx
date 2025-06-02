import React from 'react';

const Clauses = ({ count }) => {
  return (
    <div className="clauses-stats">
      <button onClick={() => alert('Viewing Clauses')}>
        {count} Clauses
      </button>
    </div>
  );
};

export default Clauses;