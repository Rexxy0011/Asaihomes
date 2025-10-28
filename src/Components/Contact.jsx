import React, { useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.target);

    try {
      const response = await fetch("https://usebasin.com/f/e20fe7a257ff", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-light text-primary px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Let’s Build Your Dream Home
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you’re ready to invest, build, or explore your next move, our
          team is ready to assist with expertise and care.
        </p>
      </div>

      {/* Contact Form Only */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-primary">
          Send Us a Message
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-gray-700"
          autoComplete="off"
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <img
                src={assets.user}
                alt="user"
                className="w-5 h-5 opacity-70"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <img
                src={assets.email}
                alt="email"
                className="w-5 h-5 opacity-70"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <img
                src={assets.phone}
                alt="phone"
                className="w-5 h-5 opacity-70"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 801 234 5678"
                required
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <div className="flex items-start border border-gray-300 rounded-lg px-3">
              <img
                src={assets.text}
                alt="message"
                className="w-5 h-5 mt-3 opacity-70"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows="4"
                className="w-full p-2 outline-none bg-transparent resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 border-2 border-accent text-primary font-semibold py-3 rounded-full hover:text-accent transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
