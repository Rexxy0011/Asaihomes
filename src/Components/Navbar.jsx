import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ✅ add useNavigate

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll helper (works across routes)
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home first
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <div
      className={`${
        location.pathname === "/about" || location.pathname === "/projects"
          ? "bg-primary text-white"
          : "bg-transparent"
      } absolute top-0 left-0 w-full z-20 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <img src={assets.logo} alt="logo" className="w-32 object-contain" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          <Link
            to="/"
            className="hover:text-accent transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-accent transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-accent transition-colors duration-300"
          >
            Projects
          </Link>
          <button
            onClick={() => handleScroll("testimonials")}
            className="hover:text-accent transition-colors duration-300"
          >
            Testimonials
          </button>
        </ul>

        {/* Booking Button */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:block text-white border-2 border-accent hover:text-accent px-6 py-2 rounded-full font-semibold transition-all duration-300"
        >
          Booking
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-6 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center space-y-8 text-lg text-white font-medium md:hidden z-30 transition-all duration-300">
          <div className="absolute top-6 right-6">
            <img
              src={assets.close_button}
              alt="close menu"
              className="w-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent"
          >
            Projects
          </Link>
          <button
            onClick={() => handleScroll("testimonials")}
            className="hover:text-accent"
          >
            Testimonials
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="text-white border-2 border-accent px-8 py-2 font-semibold rounded-full hover:text-accent transition-colors"
          >
            Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
