import { Link } from "react-router-dom";

const BookingForm = ({ formData, handleChange, handleSubmit }) => {
  const destinations = [
    'India (North)',
    'India (South)',
    'Nepal',
    'Bhutan',
    'Sri Lanka',
    'Maldives'
  ];

  return (
    <form onSubmit={handleSubmit} className="booking-form">

        <Link to="/"  style={{height:'40px' , backgroundColor:'black' , color:'white' , textAlign:'center' , paddingTop:'8px'}}>back to page</Link>
      <h2>Plan Your Dream Tour</h2>
      
      <div className="form-group">
        <label>Destination:</label>
        <select 
          name="destination" 
          value={formData.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select Destination</option>
          {destinations.map(dest => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Specific Location/City:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Number of Travelers:</label>
          <input
            type="number"
            name="travelers"
            min="1"
            max="20"
            value={formData.travelers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration (Days):</label>
          <input
            type="number"
            name="days"
            min="1"
            max="30"
            value={formData.days}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Food Options:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="foodOption"
              value="with"
              checked={formData.foodOption === 'with'}
              onChange={handleChange}
            />
            With Food
          </label>
          <label>
            <input
              type="radio"
              name="foodOption"
              value="without"
              checked={formData.foodOption === 'without'}
              onChange={handleChange}
            />
            Without Food
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Transportation:</label>
        <select 
          name="transport" 
          value={formData.transport}
          onChange={handleChange}
        >
          <option value="air">By Air</option>
          <option value="road">By Road</option>
          <option value="rail">By Rail</option>
          <option value="water">By Water</option>
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="guide"
            checked={formData.guide}
            onChange={handleChange}
          />
          Include Tourist Guide
        </label>
      </div>

      <div className="form-group">
        <label>Special Requirements:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit" className="submit-btn">
        Review Your Booking
      </button>
    </form>
  );
};

export default BookingForm;