import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HomeIcon,
  CalendarIcon,
  DocumentTextIcon,
  CogIcon,
} from '@heroicons/react/outline';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-900 text-gray-100 w-64 overflow-y-auto md:overflow-y-visible z-30 shadow-md`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold text-white">Manager Panel</h2>
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admindashboard"
              className="flex items-center py-2.5 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white"
            >
              <HomeIcon className="w-5 h-5 mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={() => setBookingOpen(!bookingOpen)}
              className="w-full flex justify-between items-center py-2.5 px-4 text-sm focus:outline-none rounded-lg hover:bg-gray-800 hover:text-white"
            >
              <CalendarIcon className="w-5 h-5 mr-2" /> Booking
              <svg className={`w-4 h-4 ml-2 transition-transform ${bookingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {bookingOpen && (
              <ul className="ml-4">
                <li><Link to="/bookings/all" className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">All Bookings</Link></li>
                <li><Link to="/bookings/add" className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">Add Booking</Link></li>
                <li><Link to="/bookings/edit" className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">Edit Booking</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => setRoomsOpen(!roomsOpen)}
              className="w-full flex justify-between items-center py-2.5 px-4 text-sm focus:outline-none rounded-lg hover:bg-gray-800 hover:text-white"
            >
              <DocumentTextIcon className="w-5 h-5 mr-2" /> Rooms
              <svg className={`w-4 h-4 ml-2 transition-transform ${roomsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {roomsOpen && (
              <ul className="ml-4">
                <li><Link to="/rooms/all" className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">All Rooms</Link></li>
                <li><Link to="/rooms/types" className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">Types of Rooms</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/settings" className="flex items-center py-2.5 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white">
              <CogIcon className="w-5 h-5 mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
