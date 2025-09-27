import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import "./contact.css"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? We're here to help!</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          <div className="contact-info-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>info@wanderlust.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>123 Travel Street, Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for contacting us!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="        Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="        Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="        Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <FaComment className="input-icon" />
                <textarea
                  name="message"
                  placeholder="    Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;