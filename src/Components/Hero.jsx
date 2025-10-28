import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom"; // ✅ Added missing import

const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center"
    >
      {/* Background Image */}
      <img
        src={assets.header}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,29,55,0.6)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Comfort. <span className="text-accent">Luxury</span> &{" "}
          <span className="text-accent">Affordability</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-200">
          At AsaiHomes, we create durable and elegant homes designed for every
          class — homes built to last, crafted to inspire.
        </p>

        {/* Learn More Button */}
        <Link
          to="/about"
          className="inline-block mt-10 text-white border-2 border-accent hover:text-accent px-8 py-3 font-semibold rounded-full transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
