import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AllHotels from '../pages/admin/AllHotels';
import AllRooms from '../pages/admin/AllRooms';
import Settings from '../pages/admin/Settings';
import EditHotel from '../pages/admin/EditHotel';
import AllBookings from '../pages/admin/AllBookings';
import AddBooking from '../pages/admin/AddBooking';
import EditBooking from '../pages/admin/EditBooking';
import TypesOfRooms from '../pages/admin/TypesOfRooms';
import AddHotel from '../pages/admin/AddHotel';

function AdminRouter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-4">
            <Routes>
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/bookings/all" element={<AllBookings />} />
              <Route path="/bookings/add" element={<AddBooking />} />
              <Route path="/bookings/edit" element={<EditBooking />} />
              <Route path="/rooms/all" element={<AllRooms />} />
              <Route path="/rooms/types" element={<TypesOfRooms />} />
              <Route path="/hotels/all" element={<AllHotels />} />
              <Route path="/hotels/add" element={<AddHotel />} />
              <Route path="/hotels/edit" element={<EditHotel />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AdminRouter;
