import React from 'react';

const Evidences = ({ count }) => {
  return (
    <div className="evidences-stats">
      <h3>{count}</h3>
      <p>Evidences</p>
      <button onClick={() => alert('Viewing Evidences')}>View Evidences</button>
    </div>
  );
};

export default Evidences;