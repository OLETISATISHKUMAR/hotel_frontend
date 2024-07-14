import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Hotel Booking</Link>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/rooms" className="mx-2">Rooms</Link>
          <Link to="/signup" className="mx-2">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
