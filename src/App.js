import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    
  <BrowserRouter> 
    <Header />
  <Routes>
    <Route path ="/" element={<Home />} />
    <Route path ="/contact" element={<Contact />} />
    <Route path ="/signup" element={<Signup />} />
    <Route path ="/login" element={<Login />} />
    <Route path='*' element={<h2>Wrong path 404 💩</h2>} />
  </Routes>
    <Footer />
   </BrowserRouter>
   )
}

export default App;
