import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const ToursSection = () => {
  const tourCategories = [
    {
      title: "TOURS BY INTEREST",
      count: "4 Packages",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      items: ["Cultural", "Adventure", "Wildlife", "Luxury"]
    },
    {
      title: "TOURS BY REGION",
      count: "10 Regions", 
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      items: ["North India", "South India", "Himalayas", "Coastal", "Desert"]
    },
    {
      title: "TRAVELLER CORNER",
      count: "20,000 Categories",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
      items: ["Travel Tips", "Packing Guides", "Cultural Etiquette"]
    }
  ];

  return (
    <section className="tours-section-hero">
      <div className="tourSection-hero-overlay">
        <h1>DISCOVER INDIA'S MAGIC</h1>
        <p>Journey through diverse landscapes and rich cultures with  <span style={{color:'#f04141'}}>WanderLust</span></p>
         <Link to="/book-now" className="book-now-btn" ><button >Book Your Custom Tour</button></Link>
      </div>

      <div className="tour-grid">
        {tourCategories.map((category, index) => (
          <div className="tour-card" key={index}>
            <div 
              className="card-image"
              style={{backgroundImage: `url(${category.image})`}}
            >
              <div className="card-badge">{category.count}</div>
            </div>
            <div className="card-content">
              <h2>{category.title}</h2>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="explore-more-btn">
                Explore <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="about-section">
        <h2><span style={{color:'white'}}>TRAVEL WITH</span> <span style={{color:'#f04141'}}>WANDERLUST</span></h2>
        <div className="about-content">
          <p style={{color:'white'}} >
            WanderLust (India) invites you to discover the mesmerising beauty of our Indian subcontinent. 
            Combining the cultural splendours of India with the snow covered Himalayan peaks of Nepal, 
            the serenity of Bhutan, green tea estates of Sri Lanka and the turquoise beaches of Maldives.
          <br />
            When travelling to India, it is worth taking a short trip to a neighbouring country, 
            to enhance your experience. You will notice a striking similarity, yet subtle differences 
            in the people, food, culture, religion and lifestyle.
          </p>
        </div>
        <div className="cta-buttons">
          <button className="secondary-btn">QUICK ENQUIRY</button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;