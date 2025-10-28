import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="About"
      className="flex flex-col items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white text-primary"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">Who We Are</h1>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
      </div>

      {/* Image + Description */}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl mb-16">
        {/* Image */}
        <img
          src={assets.about_img}
          alt="About AsaiHomes"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        {/* Text */}
        <div className="flex-1 text-dark leading-relaxed text-base sm:text-lg">
          <p className="mb-4">
            <span className="font-semibold text-accent">AsaiHomes</span> is
            redefining real estate in Nigeria by merging{" "}
            <span className="font-medium text-primary">
              luxury, comfort, and affordability
            </span>{" "}
            into every home we build. In Lagos and Abuja — cities where
            substandard housing has long been a challenge — we’re setting a new
            benchmark for modern living.
          </p>
          <p className="mb-4">
            Our vision is simple: to provide homes that inspire pride and peace
            of mind. Each development is built with durability, elegant design,
            and a deep sense of functionality. We blend innovation,
            craftsmanship, and sustainability to create spaces where families
            can truly thrive.
          </p>
          <p>
            With over two decades of experience, AsaiHomes continues to shape
            communities with integrity, transparency, and passion — turning
            dream homes into reality.
          </p>

          {/* Read More Button */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2  text-dark px-8 py-3 rounded-full font-semibold mt-6  hover:text-accent border-2 border-accent transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center w-full max-w-4xl mt-10"
      >
        <div>
          <h3 className="text-4xl font-bold text-accent">
            {inView && <CountUp end={460} duration={3} />}+
          </h3>
          <p className="text-dark mt-2 font-medium">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-accent">
            {inView && <CountUp end={20} duration={3} />}+
          </h3>
          <p className="text-dark mt-2 font-medium">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-accent">
            {inView && <CountUp end={5400} duration={3} />}+
          </h3>
          <p className="text-dark mt-2 font-medium">Completed Projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-accent">
            {inView && <CountUp end={830} duration={3} />}+
          </h3>
          <p className="text-dark mt-2 font-medium">Ongoing Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
