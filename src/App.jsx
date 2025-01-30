import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import ProfileCreation from './Pages/ProfileCreation';
import Dashboard from './pages/Dashboard';
import HomePage from './Pages/HomePage';
import AddProfile from './pages/AddProfile';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<SignIn/>} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-profile" element={<AddProfile/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
