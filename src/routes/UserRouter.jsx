import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/user/HomePage"
import RoomListPage from '../pages/user/RoomListPage';
import RoomDetailsPage from '../pages/user/RoomDetailsPage';
import BookingConfirmationPage from '../pages/user/BookingConfirmationPage';
import Navbar from '../components/user/Navbar';
import Footer from '../components/user/Footer';
import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup"

const UserRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomListPage />} />
        <Route path="/rooms/:id" element={<RoomDetailsPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default UserRouter;
