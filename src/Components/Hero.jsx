import React from 'react';
import hero from "../img/mob.webp";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-custom-Blush w-full h-auto md:h-screen">
      <div
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-screen"
      >
        {/* Left Section - Tagline */}
        <div
          id="tagline"
          className="font-serif flex justify-center flex-col items-center text-center md:text-left p-4 md:p-8"
        >
          <h2 className="text-5xl md:text-[90px] leading-tight w-full md:w-[500px]">
            Find Your
          </h2>
          <h2 className="text-5xl md:text-[90px] leading-tight w-full md:w-[500px] mt-[-20px] md:mt-[-50px]">
            Janamsathi
          </h2>
          <p className="opacity-80 text-lg md:text-[30px] w-full md:w-[600px] mt-4">
            Keep your love story in your hands. Create an account with us and get your Future Spouse.
          </p>

          <Link to="/signup">
  <button className="bg-violet-500 w-[150px] md:w-[200px] h-[50px] md:h-[70px] text-white text-lg md:text-[20px] rounded-full mt-6">
    Join Now
  </button>
</Link>

        </div>

        {/* Right Section - Image */}
        <div
          id="img"
          className="flex justify-center items-center p-4 md:p-0"
        >
          <img
            src={hero}
            alt="Hero"
            className="w-[50%] md:w-full max-w-[300px] md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
