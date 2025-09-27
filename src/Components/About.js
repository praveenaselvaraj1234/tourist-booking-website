import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="about-page">

            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-title">Our Story</h1>
                    <p className="about-subtitle">Discover the passion behind WanderLust</p>
                </div>
            </section>


            <section className="about-section mission-section" style={{ background: 'none' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Mission</h2>
                        <div className="divider pink"></div>
                    </div>
                    <div className="mission-content">
                        <p>
                            At WanderLust, we believe travel should be transformative, inspiring,
                            and accessible to everyone. Our mission is to craft unforgettable
                            journeys that connect you with the world's most breathtaking
                            destinations while supporting local communities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section team-section">
                <div className="container-about">
                    <div className="section-header">
                        <h2>Meet Our Team</h2>
                        <div className="divider pink"></div>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image" style={{ backgroundImage: "url('/images/boats-6700576_1280.jpg')" }}></div>
                            <h3>Sarah Johnson</h3>
                            <p className="position">Founder & CEO</p>
                            <p className="bio">
                                With 15 years in the travel industry, Sarah's passion for cultural
                                immersion drives our company vision.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-image" style={{ backgroundImage: "url('/images/boats-6700576_1280.jpg')" }}></div>
                            <h3>Michael Chen</h3>
                            <p className="position">Head of Operations</p>
                            <p className="bio">
                                Michael ensures every detail of your journey is perfect, with a
                                knack for finding hidden gems.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-image" style={{ backgroundImage: "url('/images/boats-6700576_1280.jpg')" }}></div>
                            <h3>Priya Patel</h3>
                            <p className="position">Travel Designer</p>
                            <p className="bio">
                                Priya crafts personalized itineraries that turn travel dreams into
                                reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section values-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Values</h2>
                        <div className="divider pink"></div>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">✈️</div>
                            <h3>Authentic Experiences</h3>
                            <p>We go beyond tourist spots to deliver genuine cultural immersion.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌍</div>
                            <h3>Sustainable Travel</h3>
                            <p>We're committed to eco-friendly practices and supporting local economies.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Personalized Service</h3>
                            <p>Every journey is tailored to your unique interests and preferences.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <div className="container">
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Let us craft your perfect travel experience</p>
                    <button className="cta-button">Contact Us</button>
                </div>
            </section>
        </div>
    );
};

export default About;