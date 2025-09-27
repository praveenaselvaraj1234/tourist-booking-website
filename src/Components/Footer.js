// components/Footer.jsx
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

    const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };


  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">WanderLust</h3>
          <p className="footer-tagline">Making dream destinations accessible since 2003.</p>
          <div className="social-links">
            <a href="/facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="/instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="/twitter" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li><FaPhone /> +91 9876543210</li>
            <li><FaEnvelope /> info@WanderLust.com</li>
            <li><FaMapMarkerAlt /> 123 Travel Street, Mumbai</li>
          </ul>
          <Link to="/contact" className="contact-click-button"  onClick={handleContactClick} style={{color:'white'}}>
            Contact Us
          </Link>
        </div>
        
        <div className="footer-column">
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <FaPaperPlane /> Subscribe
            </button>
          </form>
          {subscribed && <p className="subscription-message" style={{color:'white'}} >Thank you for subscribing!</p>}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WanderLust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;