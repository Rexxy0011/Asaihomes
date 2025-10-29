import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Eye,
  Handshake,
  Hammer,
  DollarSign,
  Users,
} from "lucide-react";
import { assets } from "../assets/assets";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <Navbar />
      <section className=" text-primary px-6 sm:px-12 lg:px-24 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 mt-10">
            About AsaiHomes
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building more than houses — we create lasting value, safe
            structures, and thriving communities across Nigeria’s major cities.
            At AsaiHomes, every project reflects integrity, craftsmanship, and
            affordability.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="flex flex-col items-center text-center bg-light p-8 rounded-2xl shadow-sm">
            <Target size={40} className="text-accent mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver quality homes built with trust, transparency, and
              tested materials — creating spaces that balance comfort, design,
              and affordability for Nigerian families.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-light p-8 rounded-2xl shadow-sm">
            <Eye size={40} className="text-accent mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted real estate name in Nigeria — known for
              durable projects, transparent service, and communities where
              families can thrive and grow.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <img
            src={assets.story}
            alt="Our Story"
            className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              AsaiHomes began with a simple goal — to restore confidence in real
              estate. After years of witnessing low-quality builds, failed
              promises, and overpriced estates in cities like Lagos and Abuja,
              we set out to prove that quality and affordability can coexist.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every structure we deliver tells a story of commitment — from
              solid foundations to clean finishes, all backed by transparency
              and accountability. Our homes are designed to last, enhance
              lifestyles, and represent the pride of ownership.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Our Core Values</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Handshake size={36} className="text-accent" />,
              title: "Integrity First",
              desc: "We deliver what we promise, ensuring honesty in every project.",
            },
            {
              icon: <Hammer size={36} className="text-accent" />,
              title: "Built to Last",
              desc: "We use tested materials and experienced hands to guarantee durability.",
            },
            {
              icon: <DollarSign size={36} className="text-accent" />,
              title: "Affordable Excellence",
              desc: "We believe premium living should be accessible to working families.",
            },
            {
              icon: <Users size={36} className="text-accent" />,
              title: "Community Growth",
              desc: "We design homes that foster connection, safety, and belonging.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-20 w-full max-w-5xl mx-auto"
        >
          {[
            { number: 460, label: "Happy Clients" },
            { number: 5400, label: "Projects Completed" },
            { number: 20, label: "Years of Experience" },
            { number: 16, label: "Cities Reached" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-extrabold text-accent">
                {inView && <CountUp end={stat.number} duration={3} />}+
              </h3>
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h3 className="text-2xl font-bold mb-4">
            Let’s Build the Future You Deserve
          </h3>
          <p className="text-gray-600 mb-6">
            Whether you’re investing, relocating, or building a new life —
            AsaiHomes is here to bring your vision to reality.
          </p>
          <a
            href="/projects"
            className="inline-block text-primary hover:bg-transparent hover:text-accent border-2 border-accent px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View Our Projects
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
