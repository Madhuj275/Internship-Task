import React from 'react';
import ProfileCard from '../components/ProfileCard';

const MyMatches = () => {
  const matches = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Person ${i + 1}`,
    age: 25 + i,
    description: 'Lorem ipsum dolor sit amet.',
    picture: `https://via.placeholder.com/150?text=Person+${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((match) => (
        <ProfileCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MyMatches;
