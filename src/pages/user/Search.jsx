import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSubmit }) => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [persons, setPersons] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ location, startDate, endDate, persons });
  };

  return (
    <div className="w-90vh mx-auto bg-white p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Search Hotel
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
        {/* Location input */}
        <div className="flex items-center space-x-4 col-span-1">
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 border rounded-md p-2 focus:outline-none focus:border-blue-500"
            aria-label="Location"
          >
            <option value="" disabled>
              Select location
            </option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Miami">Miami</option>
          </select>
        </div>
        {/* Start Date input */}
        <div className="flex items-center space-x-4 col-span-1">
          <label htmlFor="startDate" className="sr-only">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="flex-1 border rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Start Date"
            aria-label="Start Date"
          />
        </div>
        {/* End Date input */}
        <div className="flex items-center space-x-4 col-span-1">
          <label htmlFor="endDate" className="sr-only">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="flex-1 border rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="End Date"
            aria-label="End Date"
          />
        </div>
        {/* Persons input */}
        <div className="flex items-center space-x-4 col-span-1">
          <label htmlFor="persons" className="sr-only">
            Persons
          </label>
          <input
            type="number"
            id="persons"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className="flex-1 border rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter number of persons"
            aria-label="Persons"
            min="1"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
