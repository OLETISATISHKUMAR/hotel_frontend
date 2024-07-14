const bookings = [
  { id: 1, customer: 'John Doe', package: 'Deluxe', booking: '2024-06-01', roomType: 'Suite', arrive: '2024-06-05', payment: 'Paid' },
  { id: 2, customer: 'Jane Smith', package: 'Standard', booking: '2024-06-10', roomType: 'Single', arrive: '2024-06-15', payment: 'Pending' },
  { id: 3, customer: 'Michael Johnson', package: 'Premium', booking: '2024-06-20', roomType: 'Double', arrive: '2024-06-25', payment: 'Paid' },
  { id: 4, customer: 'John Doe', package: 'Deluxe', booking: '2024-06-01', roomType: 'Suite', arrive: '2024-06-05', payment: 'Paid' },
  { id: 5, customer: 'Jane Smith', package: 'Standard', booking: '2024-06-10', roomType: 'Single', arrive: '2024-06-15', payment: 'Pending' },
  { id: 6, customer: 'Michael Johnson', package: 'Premium', booking: '2024-06-20', roomType: 'Double', arrive: '2024-06-25', payment: 'Paid' },
];

function AllBookings() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Bookings</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-6 text-left text-sm font-semibold">ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Customer</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Package</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Booking</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Room Type</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Arrive</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Payment</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="py-4 px-6">{booking.id}</td>
                <td className="py-4 px-6">{booking.customer}</td>
                <td className="py-4 px-6">{booking.package}</td>
                <td className="py-4 px-6">{booking.booking}</td>
                <td className="py-4 px-6">{booking.roomType}</td>
                <td className="py-4 px-6">{booking.arrive}</td>
                <td className="py-4 px-6">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      booking.payment === 'Paid'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {booking.payment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBookings;
