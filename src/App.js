import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import {BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2 className="text-3xl text-white font-bold">Auth-Application</h2>
        <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
