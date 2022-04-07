import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './screen/HomePage';
import LogOut from './components/LogOut';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
