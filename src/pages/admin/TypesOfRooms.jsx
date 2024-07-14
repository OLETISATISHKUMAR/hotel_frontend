import { useState } from 'react';

const roomTypes = [
  { id: 1, name: 'Suite', rent: '$300/night', shortCode: 'SU', numOfRooms: 5, type: 'Luxury', status: 'Available' },
  { id: 2, name: 'Deluxe', rent: '$200/night', shortCode: 'DL', numOfRooms: 10, type: 'Standard', status: 'Occupied' },
  { id: 3, name: 'Standard', rent: '$150/night', shortCode: 'ST', numOfRooms: 15, type: 'Standard', status: 'Available' },
  { id: 4, name: 'Single', rent: '$100/night', shortCode: 'SI', numOfRooms: 8, type: 'Economy', status: 'Available' },
];

function TypesOfRooms() {
  const [filteredRoomTypes, setFilteredRoomTypes] = useState(roomTypes);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    filterRoomTypes(query);
  };

  const filterRoomTypes = (query) => {
    const filtered = roomTypes.filter(roomType =>
      roomType.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoomTypes(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Room Types</h1>
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search by Room Name:</label>
        <div className="relative">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter room name..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M14.293 13.293a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 1 1 1.414 1.414L11.414 10l2.879 2.879z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent (Basic)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Short Code</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Of Room</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRoomTypes.map(roomType => (
              <tr key={roomType.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{roomType.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomType.rent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomType.shortCode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomType.numOfRooms}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomType.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-block py-1 px-3 rounded-full text-xs ${roomType.status === 'Available' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {roomType.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRoomTypes.length === 0 && (
          <div className="px-6 py-4 bg-white text-sm text-gray-500">No matching room types found.</div>
        )}
      </div>
    </div>
  );
}

export default TypesOfRooms;
