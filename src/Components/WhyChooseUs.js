import React from 'react';
import "../App.css"

const WhyChooseUs = () => {
  const features = [
    {
      icon: '✈️',
      title: '20+ Years Experience',
      desc: 'Trusted by 50,000+ travelers since 2003'
    },
    {
      icon: '🛡️',
      title: 'Financial Protection',
      desc: 'All bookings are ATOL protected'
    },
    {
      icon: '🌐',
      title: 'Global Network',
      desc: 'Partners in 30+ countries'
    },
    {
      icon: '⭐',
      title: 'Award Winning',
      desc: 'Best Travel Agency 2023'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="section-header">
        <h2>Why Choose WanderLust?</h2>
        <p>We go the extra mile to make your journey unforgettable</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;