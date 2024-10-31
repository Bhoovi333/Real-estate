import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import ImageCardGallery from './components/Property';
function App() {
  return (
 <>

      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<ImageCardGallery />} />
      </Routes>
   
 </>
  );
}

export default App;