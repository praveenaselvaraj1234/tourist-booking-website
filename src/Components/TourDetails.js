import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaSun,
  FaUtensils,
  FaHotel,
  FaBus,
  FaHiking,
  FaArrowLeft
} from 'react-icons/fa';
import "../App.css"

const TourDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state || {};

  useEffect(() => {
    if (!destination) {
      navigate('/');
    }
  }, [destination, navigate]);

  if (!destination) return null;

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    ));
  };

  return (
    <motion.div 
      className="tour-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="tour-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Destinations
        </button>
        <div className="tour-title">
          <h1>{destination.name}</h1>
          <div className="rating">
            {renderStars(destination.rating || 4)}
            <span>({destination.reviews || 124} reviews)</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img src={destination.image} alt={destination.name} />
        <div className="hero-overlay">
          <div className="price-badge">
            <span className="price">{destination.price}</span>
            <span className="per-person">*per person</span>
          </div>
        </div>
      </motion.div>

      <div className="details-content">
        <motion.div 
          className="quick-facts"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="fact-item">
            <FaMapMarkerAlt className="fact-icon" />
            <div>
              <h4>Location</h4>
              <p>{destination.location || destination.name}</p>
            </div>
          </div>
          <div className="fact-item">
            <FaCalendarAlt className="fact-icon" />
            <div>
              <h4>Duration</h4>
              <p>{destination.days}</p>
            </div>
          </div>
          <div className="fact-item">
            <FaSun className="fact-icon" />
            <div>
              <h4>Best Time</h4>
              <p>{destination.bestTime || 'Year-round'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="overview-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2>Overview</h2>
          <p>{destination.description}</p>
          <div className="tag-container">
            {destination.tags?.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="details-grid"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="detail-card">
            <FaHiking className="detail-icon" />
            <h3>Activities</h3>
            <ul>
              {destination.activities?.map((activity, i) => (
                <li key={i}>{activity}</li>
              )) || [
                'Guided tours',
                'Cultural experiences',
                'Adventure activities'
              ].map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
          <div className="detail-card">
            <FaUtensils className="detail-icon" />
            <h3>Meals Included</h3>
            <p>{destination.meals || 'Breakfast daily, 3 dinners'}</p>
          </div>
          <div className="detail-card">
            <FaHotel className="detail-icon" />
            <h3>Accommodation</h3>
            <p>{destination.accommodation || '4-star hotels'}</p>
          </div>
          <div className="detail-card">
            <FaBus className="detail-icon" />
            <h3>Transport</h3>
            <p>{destination.transport || 'Private AC vehicle'}</p>
          </div>
        </motion.div>

        <motion.div 
          className="highlights-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2>Trip Highlights</h2>
          <div className="highlight-grid">
            {destination.highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="highlight-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              >
                <div className="highlight-number">{index + 1}</div>
                <p>{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {destination.itinerary && (
          <motion.div 
            className="itinerary-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2>Daily Itinerary</h2>
            <div className="timeline">
              {destination.itinerary.map((day, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-day">Day {index + 1}</div>
                  <div className="timeline-content">
                    <h4>{day.title}</h4>
                    <p>{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}


        <motion.div 
          className="cta-section"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="price-box">
            <span className="starting-from">Starting from</span>
            <span className="final-price">{destination.price}</span>
            <span className="per-person">*per person</span>
          </div>
          <div className="cta-buttons">
            <Link to="/book-now" className="book-now-btn-details" >Book Your Custom Tour</Link>
            {/* <button className="secondary-btn">Request Customization</button> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TourDetails;