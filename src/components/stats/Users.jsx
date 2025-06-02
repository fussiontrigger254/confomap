import React from 'react';

const Users = ({ count }) => {
  return (
    <div className="users-stats">
      <h3>{count}</h3>
      <p>Users</p>
      <button onClick={() => alert('Viewing Users')}>View Users</button>
    </div>
  );
};

export default Users;