import  { useState } from 'react';

const initialHotels = [
  { id: 1, name: 'Hotel A', address: '123 Main St, City A', city: 'City A', image: 'https://via.placeholder.com/150', phone: '123-456-7890', email: 'hotelA@example.com' },
  { id: 2, name: 'Hotel B', address: '456 Park Ave, City B', city: 'City B', image: 'https://via.placeholder.com/150', phone: '456-789-0123', email: 'hotelB@example.com' },
  { id: 3, name: 'Hotel C', address: '789 Elm St, City C', city: 'City C', image: 'https://via.placeholder.com/150', phone: '789-012-3456', email: 'hotelC@example.com' },
];

function AllHotels() {
  const [hotels, setHotels] = useState(initialHotels);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (hotelId) => {
    // Handle edit functionality, e.g., redirect to edit hotel component or show modal
    console.log(`Editing hotel with ID: ${hotelId}`);
  };

  // Filter hotels based on city when search query changes
  const filteredHotels = hotels.filter((hotel) =>
    hotel.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Hotels</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by City..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredHotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{hotel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hotel.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hotel.city}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hotel.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(hotel.id)}
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllHotels;
