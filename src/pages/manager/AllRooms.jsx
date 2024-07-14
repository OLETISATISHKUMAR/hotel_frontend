import { useState } from 'react';

const rooms = [
  { id: 1, roomNo: '101', roomType: 'Suite', ac: 'AC', meal: 'Breakfast', bedCapacity: '2', rent: '$300/night', status: 'Available' },
  { id: 2, roomNo: '102', roomType: 'Deluxe', ac: 'Non AC', meal: 'Dinner', bedCapacity: '3', rent: '$200/night', status: 'Occupied' },
  { id: 3, roomNo: '103', roomType: 'Standard', ac: 'AC', meal: 'None', bedCapacity: '2', rent: '$150/night', status: 'Available' },
  { id: 4, roomNo: '104', roomType: 'Single', ac: 'Non AC', meal: 'Breakfast', bedCapacity: '1', rent: '$100/night', status: 'Available' },
  { id: 5, roomNo: '105', roomType: 'Suite', ac: 'AC', meal: 'Dinner', bedCapacity: '2', rent: '$300/night', status: 'Available' },
  { id: 6, roomNo: '106', roomType: 'Deluxe', ac: 'Non AC', meal: 'None', bedCapacity: '3', rent: '$200/night', status: 'Occupied' },
];

function AllRooms() {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [roomTypeFilter, setRoomTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleRoomTypeChange = (e) => {
    const type = e.target.value;
    setRoomTypeFilter(type);
    filterRooms(type, statusFilter);
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setStatusFilter(status);
    filterRooms(roomTypeFilter, status);
  };

  const filterRooms = (roomType, status) => {
    let filtered = rooms;

    if (roomType !== 'All') {
      filtered = filtered.filter(room => room.roomType === roomType);
    }

    if (status !== 'All') {
      filtered = filtered.filter(room => room.status === status);
    }

    setFilteredRooms(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Rooms</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <label className="mr-2">Filter by Room Type:</label>
          <select
            value={roomTypeFilter}
            onChange={handleRoomTypeChange}
            className="px-3 py-2 border rounded-lg focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Suite">Suite</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Standard">Standard</option>
            <option value="Single">Single</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="px-3 py-2 border rounded-lg focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
        </div>
      </div>
      {/* Table Display */}
      {filteredRooms.length === 0 ? (
        <div className="text-center text-gray-600 mt-8">No rooms available.</div>
      ) : (
        <table className="min-w-full bg-white border rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AC/Non AC</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bed Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRooms.map(room => (
              <tr key={room.id}>
                <td className="px-6 py-4 whitespace-nowrap">{room.roomNo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.roomType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.ac}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.meal}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.bedCapacity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.rent}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-block py-1 px-3 rounded-full text-xs ${room.status === 'Available' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {room.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllRooms;
