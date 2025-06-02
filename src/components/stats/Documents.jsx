import React from 'react';

const Documents = ({ count }) => {
  return (
    <div className="documents-stats">
      <button onClick={() => alert('Viewing Documents')}>
        {count} Documents
      </button>
    </div>
  );
};

export default Documents;