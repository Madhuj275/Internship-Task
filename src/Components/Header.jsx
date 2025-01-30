import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 shadow-md">

      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="data:image/png;base64,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" 
              alt="Byaah Logo"
              className="h-10 w-auto mr-3"
            />
          </Link>
          <h1 className="text-3xl font-extrabold">
            <Link to="/" className="hover:text-cyan-200 transition duration-300">
              Janamsathi.com
            </Link>
          </h1>
        </div>
        {/* Navigation Links */}
        <nav className="space-x-6 flex ml-auto">
        <Link
          to="/"
          className="relative text-xl px-4 py-2 rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white"
        >
          Home
        </Link>
          <Link
            to="/signup"
            className="relative text-xl px-4 py-2 rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/dashboard"
            className="relative text-xl px-4 py-2 rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="relative text-xl px-4 py-2 rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white"
          >
            Profile
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
