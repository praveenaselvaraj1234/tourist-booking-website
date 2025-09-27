import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import FrontView from './Components/Navbar';
import Destinations from './Components/Destinations';
import SeasonalSpots from './Components/SeasonalSpot';
import ToursSection from './Components/Toursection';
import WhyChooseUs from './Components/WhyChooseUs';
import Footer from './Components/Footer';
import Booking from './Components/Booking'; 
import ThankYou from './Components/ThankYou';
import Contact from './Components/Contact';
import TourDetails from './Components/TourDetails';
import TourExtraAddEnhanced from './Components/TourExtraAdd';
import About from './Components/About';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <FrontView searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Destinations searchQuery={searchQuery} />
            <SeasonalSpots />
            <ToursSection />
            <TourExtraAddEnhanced/>
            <WhyChooseUs />
            <Footer />
          
          </>
        } />
         <Route path="/about" element={<About />}/>
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/book-now" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;