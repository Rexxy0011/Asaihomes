import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Aboutus from "../Components/Aboutus";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
