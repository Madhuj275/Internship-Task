import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Help</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
