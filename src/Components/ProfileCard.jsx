import React from 'react';

const ProfileCard = ({ match }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={match.picture} alt={match.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-center">{match.name}</h3>
      <p className="text-gray-600 text-center">Age: {match.age}</p>
      <p className="text-gray-600 text-center mt-2">{match.description}</p>
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg mt-4 w-full">
        View More
      </button>
    </div>
  );
};

export default ProfileCard;
