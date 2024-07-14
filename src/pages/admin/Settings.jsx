import { useState } from 'react';

function Settings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, profilePicture });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
          <div className="flex items-center">
            <label htmlFor="pictureUpload" className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 inline-flex items-center">
              <span className="text-sm font-medium text-gray-700">Choose file</span>
              <input
                id="pictureUpload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="ml-2">{profilePicture ? profilePicture.name : 'No file chosen'}</span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
