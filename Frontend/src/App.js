import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Storage from './storage';
import Transport from './transport';
import GovSchm from './govschm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/storage" element={<Storage />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/govschm" element={<GovSchm />} />
      </Routes>
    </Router>
  );
}

export default App;
