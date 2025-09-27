import { Link } from 'react-router-dom';
import "../App.css"

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You for Your Booking!</h1>
        <p>Your tour request has been received. Our travel expert will contact you within 24 hours to confirm the details.</p>
        <div className="confirmation-details">
          <p>Booking Reference: <strong>TRVL{Math.floor(Math.random() * 1000000)}</strong></p>
        </div>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;