import ChartOne from "../components/ChartOne";
import SalesRevenueGraph from "../../components/admin/SalesRevenueGraph"
import RoomBookingGraph from "../../components/admin/RoomBookingGraph";
import NewCustomers from "..../../components/admin/NewCustomers";
import RecentActivity from "../../components/admin/RecentActivity";
import { FaChartLine, FaBook, FaBed, FaMoneyBillWave } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-2 sm:ml-52 p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Today Bookings */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <FaBook className="text-4xl text-blue-500" />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-3xl text-gray-700">200</h2>
              <p className="text-gray-500">Today Bookings</p>
            </div>
          </div>

          {/* Total Bookings */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <div className="p-4 bg-green-100 rounded-full">
              <FaChartLine className="text-4xl text-green-500" />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-3xl text-gray-700">500</h2>
              <p className="text-gray-500">Total Bookings</p>
            </div>
          </div>

          {/* Rooms Available */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <div className="p-4 bg-purple-100 rounded-full">
              <FaBed className="text-4xl text-purple-500" />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-3xl text-gray-700">150</h2>
              <p className="text-gray-500">Rooms Available</p>
            </div>
          </div>

          {/* Total Expenses */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <div className="p-4 bg-red-100 rounded-full">
              <FaMoneyBillWave className="text-4xl text-red-500" />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-3xl text-gray-700">$10,000</h2>
              <p className="text-gray-500">Total Expenses</p>
            </div>
          </div>

          {/* ChartOne */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-2 md:col-span-2 lg:col-span-4">
            <ChartOne />
          </div>

          {/* SalesRevenueGraph */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center md:col-span-1 lg:col-span-2">
            <SalesRevenueGraph />
          </div>

          {/* RoomBookingGraph */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center md:col-span-1 lg:col-span-2">
            <RoomBookingGraph />
          </div>

          {/* NewCustomers */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center md:col-span-1 lg:col-span-2">
            <NewCustomers />
          </div>

          {/* RecentActivity */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center md:col-span-1 lg:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
