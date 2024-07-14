import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{room.name}</h2>
        <p className="text-gray-700 mb-2">{room.description}</p>
        <p className="text-gray-800 font-bold mb-2">${room.price} / night</p>
        <Link to={`/rooms/${room.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
