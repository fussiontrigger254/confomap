import React from 'react';
import UserStats from './components/stats/Users';
import Evidences from './components/stats/Evidences';
import Departments from './components/stats/Departments';
import Users from './components/stats/Users';
import Clauses from './components/stats/Clauses';
import Documents from './components/stats/Documents';

const App = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <UserStats count={1} />
      <Evidences count={0} />
      <Departments count={0} />
      <Users count={1} />
      <Clauses count={0} />
      <Documents count={0} />
      {/* Add other components like DocumentStats, etc. */}
    </div>
  );
};

export default App;