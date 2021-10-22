import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Write />
    </div>
  );
}

export default App;
