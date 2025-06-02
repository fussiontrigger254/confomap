import React from 'react';

const Departments = ({ count }) => {
  return (
    <div className="departments-stats">
      <h3>{count}</h3>
      <p>Departments</p>
      <button onClick={() => alert('Viewing Departments')}>View Departments</button>
    </div>
  );
};

export default Departments;