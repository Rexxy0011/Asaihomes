import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-primary py-12 px-6 sm:px-12 lg:px-24 border-t-2 border-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <img
            src={assets.logo}
            alt="AsaiHomes Logo"
            className="w-40 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Redefining comfort, luxury, and affordability in modern real estate
            — building spaces that inspire trust and elevate lifestyles.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold text-accent mb-4 text-lg">Contact Us</h4>
          <div className="flex flex-col space-y-3 text-gray-700 text-sm">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <img src={assets.telephone} alt="Phone" className="w-5 h-5" />
              <p>+234 812 345 6789</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2">
              <img src={assets.mail} alt="Email" className="w-5 h-5" />
              <p>info@asaihomes.com</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2">
              <img
                src={assets.office_building}
                alt="Location"
                className="w-5 h-5"
              />
              <p>14B Wuse II, Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-semibold text-accent mb-4 text-lg">
            Working Hours
          </h4>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>Monday - Friday: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <a href="#">
              <img
                src={assets.facebook}
                alt="Facebook"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-all"
              />
            </a>
            <a href="#">
              <img
                src={assets.instagram}
                alt="Instagram"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-all"
              />
            </a>
            <a href="#">
              <img
                src={assets.linkedin}
                alt="LinkedIn"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-accent/30 my-8" />

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AsaiHomes. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
