const Confirmation = ({ formData, onBack, onConfirm }) => {
  const calculateTotal = () => {
    const basePrice = formData.days * 9000;
    const foodCost = formData.foodOption === 'with' ? formData.days * formData.travelers * 1000 : 0;
    const guideCost = formData.guide ? formData.days * 2000 : 0;
    return basePrice + foodCost + guideCost;
  };

  return (
    <div className="confirmation-container">
      <h2>Confirm Your Booking</h2>
      
      <div className="booking-details">
        <div className="detail-row">
          <span>Destination:</span>
          <span>{formData.destination}</span>
        </div>
        <div className="detail-row">
          <span>Location:</span>
          <span>{formData.location}</span>
        </div>
        <div className="detail-row">
          <span>Travelers:</span>
          <span>{formData.travelers}</span>
        </div>
        <div className="detail-row">
          <span>Duration:</span>
          <span>{formData.days} days</span>
        </div>
        <div className="detail-row">
          <span>Food:</span>
          <span>{formData.foodOption === 'with' ? 'Included' : 'Not Included'}</span>
        </div>
        <div className="detail-row">
          <span>Transport:</span>
          <span>
            {formData.transport === 'air' ? 'By Air' :
             formData.transport === 'road' ? 'By Road' :
             formData.transport === 'rail' ? 'By Rail' : 'By Water'}
          </span>
        </div>
        <div className="detail-row">
          <span>Tour Guide:</span>
          <span>{formData.guide ? 'Yes' : 'No'}</span>
        </div>
        {formData.notes && (
          <div className="detail-row">
            <span>Special Requests:</span>
            <span>{formData.notes}</span>
          </div>
        )}
        <div className="detail-row total">
          <span>Estimated Total:</span>
          <span>₹{calculateTotal().toLocaleString()}</span>
        </div>
      </div>

      <div className="confirmation-actions">
        <button type="button" onClick={onBack} className="back-btn">
          Back to Edit
        </button>
        <button type="button" onClick={onConfirm} className="confirm-btn">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Confirmation;