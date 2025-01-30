import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../Components/DashboardHeader';
import Header from '../Components/Header';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <DashboardHeader />
      <div className="container mx-auto py-8">
        {/* Navigation Links */}
        <nav className="flex space-x-4 mb-6">
          <button
            onClick={() => navigate('/profile')}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Add Profile
          </button>
          <button
            onClick={() => navigate('/dashboard/my-matches')}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            My Matches
          </button>
        </nav>

        

        {/* Dynamic Content Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <p>Select an option from the navigation menu to proceed.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
