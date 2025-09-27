import React from 'react';
import "../App.css"

const SeasonalSpots = () => {
  const seasonalSpots = [
    {
      id: 1,
      name: "Ski in Swiss Alps",
      season: "Winter (Dec-Mar)",
      image: "/images/great-wall-of-china-5483516_640.jpg",
      highlight: "Powder snow resorts",
      price: "From ₹92,000"
    },
     {
      id: 2,
      name: "Cherry Blossoms in Kyoto",
      season: "Spring (Mar-May)",
      image: "/images/japan-2902301_640.jpg",
      highlight: "Pink sakura festivals",
      price: "From ₹81,000"
    },
    {
      id: 3,
      name: "Mediterranean Cruise",
      season: "Summer (Jun-Aug)",
      image: "/images/coastal-5527726_640.jpg",
      highlight: "Island-hopping",
      price: "From ₹97,000"
    },
  
  ];

  return (
    <section className="seasonal-spots-section">
      <h2 className="seasonal-title">Seasonal Highlights</h2>
      <p className="seasonal-subtitle">Best places to visit right now</p>
      
      <div className="seasonal-grid">
        {seasonalSpots.map((spot) => (
          <div className="seasonal-card" key={spot.id}>
            <div className="seasonal-img-container">
              <img src={spot.image} alt={spot.name} />
              <div className="seasonal-badge">{spot.season}</div>
            </div>
            <div className="seasonal-content">
              <h3>{spot.name}</h3>
              <p className="seasonal-highlight">{spot.highlight}</p>
              <div className="seasonal-price">{spot.price} <span style={{color:'black' , fontSize:'12px'}}>*per person</span> </div>
              <button className="seasonal-btn">
                Explore <span className="seasonal-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalSpots;