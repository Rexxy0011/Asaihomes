import React from "react";
import { assets } from "../assets/assets";

const Services = () => {
  const services = [
    {
      title: "Affordable Luxury Housing",
      description:
        "We design and develop premium homes that balance comfort, durability, and affordability — redefining modern living in Nigeria.",
      icon: assets.housing_icon,
    },
    {
      title: "Smart Construction & Quality Assurance",
      description:
        "Using cutting-edge materials and precise engineering, our construction process ensures safety, efficiency, and long-lasting results.",
      icon: assets.construction_icon,
    },
    {
      title: "Property Development & Investment Advisory",
      description:
        "We guide investors and developers with smart insights, feasibility studies, and profitable real estate strategies.",
      icon: assets.property_icon,
    },
    {
      title: "Flexible Home Financing",
      description:
        "Our financing models and partnerships make home ownership easier — giving clients control, confidence, and stability.",
      icon: assets.financing_icon,
    },
    {
      title: "Interior Design & Space Optimization",
      description:
        "From concept to finish, we transform spaces into elegant, functional, and sustainable living environments.",
      icon: assets.interior_icon,
    },
    {
      title: "Facility Management & After-Sales Support",
      description:
        "Our responsibility continues after handover — we maintain, manage, and ensure long-term value for every property.",
      icon: assets.company,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-light text-primary px-6 sm:px-12 lg:px-24"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">What We Offer</h2>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-dark max-w-2xl mx-auto">
          Delivering comfort, trust, and innovation through affordable luxury,
          sustainable building, and long-term property value.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-accent"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-5 object-contain"
            />
            <h3 className="text-xl font-semibold text-primary mb-3">
              {service.title}
            </h3>
            <p className="text-dark text-l leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
