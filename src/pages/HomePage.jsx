import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />

      {/* How Will Love Find Your Way Section */}
      <section className="bg-Blush w-full font-serif py-16">
        <div className="font-sans bg-Blush-50">
          {/* Heading */}
          <section className="text-center py-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              How Will Love
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Find Your Way?
            </h2>
          </section>

          {/* Cards Section */}
          <section className="relative px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <div className="relative bg-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mx-auto">
                  <span className="text-2xl text-purple-600">❤️</span>
                </div>
                
                <h3 className="text-lg font-bold text-center mt-4">
                  Choose Partner
                </h3>
                <p className="text-center text-sm text-gray-600 mt-2">
                  Set up your account, provide detailed information, and find a
                  partner that matches your interests.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative bg-pink-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-200 rounded-full mx-auto">
                  <span className="text-2xl text-pink-600">📩</span>
                </div>
                <h3 className="text-lg font-bold text-center mt-4">
                  Send Message
                </h3>
                <p className="text-center text-sm text-gray-600 mt-2">
                  Once you get a match, don’t be shy; it’s your time to shine.
                  Get in touch for a fun conversation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative bg-blue-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
                  <span className="text-2xl text-blue-600">💑</span>
                </div>
                <h3 className="text-lg font-bold text-center mt-4">
                  Go On A Date
                </h3>
                <p className="text-center text-sm text-gray-600 mt-2">
                  After that, why not go on a date and build your relationship?
                  If everything goes well, live happily ever after.
                </p>
              </div>
            </div>
          </section>

          {/* Footer-Like Section */}
          <section className="text-center py-12 px-6">
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Still confused? Don’t worry; we have got your back. Check out our
              in-depth documentation – or simply get in touch with our support
              team for more help.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="px-6 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition">
                Learn More
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
                Video Tutorial
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default HomePage;
