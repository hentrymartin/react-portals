import React from 'react';
import CounterWithoutPortal from './CounterWithoutPortal';
import CounterWithPortal from './CounterWithPortal';

const App = () => {
  return (
    <div className="app-wrapper">
      <CounterWithoutPortal />

      <CounterWithPortal />
    </div>
  );
};

export default App;
