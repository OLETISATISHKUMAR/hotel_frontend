import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <FaBars onClick={toggleSidebar} className="text-xl cursor-pointer" />
      <h2 className="text-xl font-semibold text-white">Online Hotel Booking System</h2>
      <div className="flex items-center space-x-4">
        <span>
            Profile
        </span>
      </div>
    </div>
  );
};

export default Navbar;
