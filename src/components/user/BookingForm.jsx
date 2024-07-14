import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Single',
    persons: 1,
    rating: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/booking-confirmation');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            required
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Persons</label>
          <input
            type="number"
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
