import { useEffect, useState } from 'react';
import RoomCard from '../../components/user/RoomCard';
import room1 from "../../assets/h2.jpg";
import room2 from "../../assets/h2.jpg";
import room3 from "../../assets/h4.jpg";

const RoomListPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Dummy data for rooms
    setRooms([
      { id: 1, name: 'Deluxe Room', description: 'A luxurious room with a beautiful view.', price: 150, image: room1 },
      { id: 2, name: 'Standard Room', description: 'A comfortable room with essential amenities.', price: 100, image: room2 },
      { id: 3, name: 'Suite', description: 'A spacious suite with premium facilities.', price: 200, image: room3 },
    ]);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8 text-center">Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-4 pr-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomListPage;
