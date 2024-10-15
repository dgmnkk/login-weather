import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  return (
    <div className="h-full bg-white">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;