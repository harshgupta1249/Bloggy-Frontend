import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Single from './pages/Single/Single';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Single />
    </div>
  );
}

export default App;
