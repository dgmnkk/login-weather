import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Cookies.get('auth'); 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="h-full bg-white">
        <Routes>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    </div>
  );
}

export default App;