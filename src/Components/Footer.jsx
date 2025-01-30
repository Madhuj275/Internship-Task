import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Matrimony App. All Rights Reserved.</p>
        <nav className="mt-4">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
          <a href="#" className="hover:underline mx-2">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
