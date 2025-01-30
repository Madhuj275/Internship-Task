import React from 'react';


import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const DashboardHeader = () => {
    const navigate = useNavigate();
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <button
            onClick={() => navigate('/')}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            <h1 className="text-xl font-bold">
            Matrimony Dashboard</h1>
          </button>
        
        <DropdownMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;
