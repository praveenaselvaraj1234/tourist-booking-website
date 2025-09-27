import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import "../App.css";

const Destinations = ({ searchQuery }) => {
  const navigate = useNavigate();
  
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "/images/coastal-5527726_640.jpg",
      price: "₹80,000",
      rating: 5,
      reviews: 128,
      days: "7 Days / 6 Nights",
      location: "Cyclades, Greece",
      tags: ["Romantic", "Luxury", "Beach"],
      highlights: ["Oia sunset views", "Caldera beaches"]
    },
        {
      id: 2,
      name: "Bali, Indonesia",
      image: "/images/great-wall-of-china-5483516_640.jpg",
      price: "₹92,000",
      rating: 4,
      reviews: 215,
      days: "8 Days / 7 Nights",
      location: "Indonesia",
      tags: ["Adventure", "Cultural", "Beach"],
      highlights: [
        "Ubud rice terraces",
        "Tanah Lot temple sunset",
        "Uluwatu cliff views",
        "Traditional Balinese dance",
        "Sacred monkey forest"
      ]
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      image: "/images/iran-6791754_640.jpg",
      price: "₹1,50,000",
      rating: 5,
      reviews: 187,
      days: "10 Days / 9 Nights",
      location: "Kansai Region, Japan",
      tags: ["Cultural", "Historical", "Temples"],
      highlights: [
        "Fushimi Inari Shrine gates",
        "Golden Pavilion (Kinkaku-ji)",
        "Arashiyama bamboo forest",
        "Traditional tea ceremonies",
        "Gion geisha district"
      ]
    },
    {
      id: 4,
      name: "Maui, Hawaii",
      image: "/images/nature-4351455_640.jpg",
      price: "₹1,50,000",
      rating: 4,
      reviews: 156,
      days: "9 Days / 8 Nights",
      location: "Hawaii, USA",
      tags: ["Adventure", "Beach", "Nature"],
      highlights: [
        "Road to Hana waterfalls",
        "Haleakalā sunrise",
        "Molokini crater snorkeling",
        "Lahaina historic town",
        "Black sand beaches"
      ]
    },
    {
      id: 5,
      name: "Rome, Italy",
      image: "/images/sea-8344717_1280.jpg",
      price: "₹1,20,000",
      rating: 4,
      reviews: 243,
      days: "7 Days / 6 Nights",
      location: "Lazio, Italy",
      tags: ["Historical", "Cultural", "Food"],
      highlights: [
        "Colosseum underground tour",
        "Vatican City & Sistine Chapel",
        "Trevi Fountain at night",
        "Roman Forum ruins",
        "Trastevere food district"
      ]
    },
    {
      id: 6,
      name: "Machu Picchu, Peru",
      image: "/images/sea-8392560_640.jpg",
      price: "₹1,80,000",
      rating: 5,
      reviews: 198,
      days: "12 Days / 11 Nights",
      location: "Cusco Region, Peru",
      tags: ["Adventure", "Historical", "Trekking"],
      highlights: [
        "Sunrise at Machu Picchu",
        "Inca Trail hike",
        "Sacred Valley exploration",
        "Rainbow Mountain trek",
        "Cusco colonial architecture"
      ]
    }
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? 'star-filled' : 'star-empty'} 
      />
    ));
  };


  // for viewing the particular destinations
  const handleExplore = (destination) => {
    navigate(`/tour/${destination.id}`, { state: { destination } });
  };

  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>
          {searchQuery ? 
            `Search Results for "${searchQuery}"` : 
            "Discover Amazing Destinations"
          }
        </h2>
        {searchQuery && (
          <p className="results-count">
            {filteredDestinations.length} {filteredDestinations.length === 1 ? 'result' : 'results'} found
          </p>
        )}
      </div>

      <div className="destinations-grid">
        {(searchQuery ? filteredDestinations : destinations).map(destination => (
          <div className="destination-card" key={destination.id}>
            <div className="card-image-container">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="destination-image"
              />
              <div className="image-overlay">
                <div className="rating-badge">
                  {renderStars(destination.rating)}
                  <span>{destination.reviews} reviews</span>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="destination-meta">
                <span className="location">
                  <FaMapMarkerAlt /> {destination.location}
                </span>
                <span className="duration">
                  <FaCalendarAlt /> {destination.days}
                </span>
              </div>

              <h3 className="destination-name">{destination.name}</h3>

              <div className="highlights">
                {destination.highlights.slice(0, 3).map((highlight, i) => (
                  <span key={i} className="highlight-item">✓ {highlight}</span>
                ))}
              </div>

              <div className="price-section">
                <span className="starting-from">Starting from</span>
                <span className="price">{destination.price}</span>
                <span className="per-person">*per person</span>
              </div>

              <button 
                className="explore-bttn"
                onClick={() => handleExplore(destination)}
              >
                Explore Package <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {searchQuery && filteredDestinations.length === 0 && (
        <div className="no-results">
          <p>No destinations found matching your search.</p>
        </div>
      )}
    </section>
  );
};

export default Destinations;