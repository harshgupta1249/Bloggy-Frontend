import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Setting from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
