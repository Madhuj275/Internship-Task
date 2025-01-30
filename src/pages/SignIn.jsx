import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Header from '../Components/Header';
import { section } from 'framer-motion/client';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle email/password login
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., API call for authentication)
    // On successful sign-in:
    navigate('/dashboard'); // Navigate to the dashboard page
  };

  // Handle Google Sign-in
  const handleGoogleSignIn = (response) => {
    if (response.credential) {
      // You can send the response.credential (which is the Google ID token) to your server for verification and authentication
      console.log('Google sign-in success:', response);
      // After successful login, navigate to dashboard
      navigate('/dashboard');
    }
  };

  return (

    <section>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 font-sans">
      
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Sign In / Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <GoogleLogin
              onSuccess={handleGoogleSignIn}
              onError={(error) => console.log('Google Sign-in error:', error)}
              useOneTap
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </GoogleLogin>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-sm mt-4 text-center">
          Don't have an account? <a href="#" className="text-purple-500 hover:underline">Sign Up</a>
        </p>
      </motion.div>
    </div>
    </section>
  );
};

export default SignIn;
