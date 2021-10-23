import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Setting from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Setting />
    </div>
  );
}

export default App;
