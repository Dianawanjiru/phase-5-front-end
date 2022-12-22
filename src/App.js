import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>

    </div>
  );
}

export default App;
