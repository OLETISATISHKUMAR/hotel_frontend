import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/manager/Navbar';
import Sidebar from '../components/manager/Sidebar';
import Dashboard from "../pages/manager/Dashboard";
import AllBookings from "../pages/manager/AllBookings"
import AddBooking from "../pages/manager/AddBooking";
import EditBooking from "../pages/manager/EditBooking"
import TypesOfRooms from "../pages/manager/TypesOfRooms"
import Settings from "../pages/manager/Settings";
import AllRooms from "../pages/manager/AllRooms"
function ManagerRouter() {
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
              <Route path="/mangerdashboard" element={<Dashboard />} />
              <Route path="/bookings/all" element={<AllBookings />} />
              <Route path="/bookings/add" element={<AddBooking />} />
              <Route path="/bookings/edit" element={<EditBooking />} />
              <Route path="/rooms/all" element={<AllRooms />} />
              <Route path="/rooms/types" element={<TypesOfRooms />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default ManagerRouter;
