import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projectImages, assets } from "../assets/assets";

const Projects = () => {
  const projects = [
    {
      title: "Lekki Haven Residences",
      location: "Lekki, Lagos",
      desc: "Luxury meets affordability — elegant family-friendly duplexes with premium finishes, natural lighting, and modern architecture suited for Lagos’ lifestyle.",
      images: projectImages.lekki,
    },
    {
      title: "Abuja Elite Villas",
      location: "Asokoro, Abuja",
      desc: "A haven of class and comfort in the heart of Abuja. These villas redefine serenity and contemporary design, built with enduring value and taste.",
      images: projectImages.abuja,
    },
    {
      title: "Portview Gardens",
      location: "Port Harcourt",
      desc: "Peaceful waterfront residences combining tranquility and urban convenience. Each home is designed with lush green surroundings and premium finishes.",
      images: projectImages.port,
    },
    {
      title: "Suncrest Apartments",
      location: "Gwarinpa, Abuja",
      desc: "Affordable yet luxurious apartments that merge comfort and beauty — a true example of AsaiHomes’ commitment to quality and value.",
      images: projectImages.suncrest,
    },
    {
      title: "Ana Castle",
      location: "Anambra State",
      desc: "Built to promote safe and stylish living in the East, Ana Gardens brings together innovation, craftsmanship, and affordability for every homeowner.",
      images: projectImages.ana,
    },
    {
      title: "Ikoyi Prime Suites",
      location: "Ikoyi, Lagos",
      desc: "Premium apartments crafted for sophistication and peace of mind. A landmark of contemporary architecture and smart luxury living.",
      images: projectImages.ikoyi,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="relative bg-primary">
        <Navbar />
      </div>

      {/* Projects Section */}
      <section className="bg-white  text-primary px-6 sm:px-12 lg:px-24 py-20">
        {/* Header */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-3">
          Our Notable Projects
        </h1>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-12"></div>

        {/* Projects List */}
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col lg:flex-row items-start gap-10 mb-20 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.images?.map((img, i) => (
                  <div
                    key={`${project.title}-${i}`}
                    className={`overflow-hidden rounded-2xl ${
                      i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className={`w-full ${
                        i === 0 ? "h-80 sm:h-[22rem]" : "h-40 sm:h-44"
                      } object-cover transition-transform duration-300 hover:scale-105`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-accent mb-2">
                {project.title}
              </h2>
              <p className="text-gray-500 mb-3">{project.location}</p>
              <p className="text-gray-700 leading-relaxed">{project.desc}</p>
            </div>
          </div>
        ))}

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/asaihomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-accent text-primary hover:text-accent px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
            View More on Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Projects;
