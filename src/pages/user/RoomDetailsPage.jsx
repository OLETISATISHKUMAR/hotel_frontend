import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../../components/user/BookingForm";
import room1 from "../../assets/h2.jpg";
import room2 from "../../assets/h2.jpg";
import room3 from "../../assets/h4.jpg";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const rooms = [
      {
        id: 1,
        name: "Deluxe Room",
        description: "A luxurious room with a beautiful view.",
        price: 150,
        image: room1,
      },
      {
        id: 2,
        name: "Standard Room",
        description: "A comfortable room with essential amenities.",
        price: 100,
        image: room2,
      },
      {
        id: 3,
        name: "Suite",
        description: "A spacious suite with premium facilities.",
        price: 200,
        image: room3,
      },
    ];
    setRoom(rooms.find((r) => r.id === parseInt(id)));
  }, [id]);

  const handleBookingSubmit = (formData) => {
    console.log("Booking Details:", formData);
    navigate("/booking-confirmation");
  };

  if (!room) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold my-8 text-center text-gray-900">{room.name}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={room.image}
          alt={room.name}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
        />
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 mb-4 leading-relaxed">{room.description}</p>
          <p className="text-gray-800 font-bold text-lg mb-4">${room.price} / night</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookingForm room={room} onSubmit={handleBookingSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
