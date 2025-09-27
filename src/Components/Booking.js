import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import Confirmation from './Confirmation';
import "../App.css"

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    location: '',
    travelers: 1,
    days: 3,
    foodOption: 'with',
    transport: 'air',
    guide: false,
    notes: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is for going to 2nd step forward
    setStep(2);
  };

  return (
    <div className="booking-container">
      {step === 1 ? (
        <BookingForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Confirmation 
          formData={formData} 
          // this is for going one step back (setstep(1))
          onBack={() => setStep(1)}
          onConfirm={() => navigate('/thank-you')}
        />
      )}
    </div>
  );
};

export default Booking;