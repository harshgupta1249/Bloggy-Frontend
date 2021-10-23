import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Setting from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
