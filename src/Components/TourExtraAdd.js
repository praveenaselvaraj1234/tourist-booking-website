import React from 'react';
import "../App.css"
import { FaUmbrellaBeach, FaCity, FaRoute, FaGlobeAmericas, FaConciergeBell, FaHotel, FaHandsHelping } from 'react-icons/fa';

const TourExtraAddEnhanced = () => {
    return (
        <section className="tour-extra-enhanced-section">
            <div className="tour-extra-enhanced-container">
                <h2 className="tour-extra-enhanced-main-title">
                    <span>WHAT WE DO</span>
                </h2>

                <div className="tour-extra-enhanced-grid">
                    <div className="tour-extra-enhanced-card tour-extra-enhanced-card-main">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaConciergeBell />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">Tailored Solutions for Every Traveller</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            We create personalized travel experiences that match your unique preferences and needs.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>

                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaRoute />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">Multi-Day Tours</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Explore different parts of India by joining one of our small-group Shared Tours, or enjoy personalised
                            experiences with family and friends on our Private Tours.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>

                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaCity />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">City Tours</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Enjoy short, immersive Mumbai Tours or Delhi Tours, ranging from a few hours to a full day—perfect
                            for quick experiences or filling gaps in your schedule.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>

                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaGlobeAmericas />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">Independent Travel</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Travel independently and enjoy a worry-free experience. We Plan Your Trip, based on your needs
                            and manage all bookings and logistics, so you can fully enjoy!
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>

                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaUmbrellaBeach />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">Other Services</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Navigate India with our expert services, including Corporate Tours, School & College Tours,
                            Filming & Media Support, Vehicle & Driver Hire, and Emergency Help.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>
                    {/* Additional Card 1 - Accommodation Packages */}
                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaHotel />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">Accommodation Packages</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Handpicked stays from luxury resorts to authentic homestays. We negotiate the best rates and
                            handle all bookings for seamless experiences.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>

                    <div className="tour-extra-enhanced-card">
                        <div className="tour-extra-enhanced-card-icon">
                            <FaHandsHelping />
                        </div>
                        <h3 className="tour-extra-enhanced-card-title">VIP Concierge</h3>
                        <p className="tour-extra-enhanced-card-desc">
                            Premium service with dedicated travel concierge, priority access to attractions, and 24/7
                            personal assistance throughout your journey.
                        </p>
                        <div className="tour-extra-enhanced-card-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourExtraAddEnhanced;