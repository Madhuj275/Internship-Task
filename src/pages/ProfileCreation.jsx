import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileCreation = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Profile Creation
        </h2>

        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 1: Basic Information</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-gray-700 font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-gray-700 font-medium mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 2: Location and Preferences</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="preferences" className="block text-gray-700 font-medium mb-1">
                  Partner Preferences
                </label>
                <textarea
                  id="preferences"
                  placeholder="Describe your partner preferences"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 3: Profile Picture</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="profilePicture" className="block text-gray-700 font-medium mb-1">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileCreation;
