import React from "react";
import { assets } from "../assets/assets";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const testimonials = [
    {
      image: assets.pic1,
      name: "Johnson",
      location: "Abuja, Nigeria",
      rating: 5,
      message:
        "AsaiHomes made homeownership simple. Their process was transparent, fast, and the finishing exceeded my expectations.",
    },
    {
      image: assets.pic2,
      name: "chuka",
      location: "Lekki, Lagos",
      rating: 5,
      message:
        "I never believed quality housing could be this affordable. AsaiHomes truly redefines luxury and comfort.",
    },
    {
      image: assets.pic3,
      name: "kenny",
      location: "Port Harcourt, Nigeria",
      rating: 4,
      message:
        "From consultation to handover, AsaiHomes was professional and reliable. The design and finish are exceptional.",
    },
    {
      image: assets.pic4,
      name: " Yusuf",
      location: "Abuja, Nigeria",
      rating: 5,
      message:
        "AsaiHomes stands out. They deliver exactly what they promise — luxury homes that feel like home.",
    },
    {
      image: assets.pic5,
      name: " Okechukwu",
      location: "Lagos, Nigeria",
      rating: 5,
      message:
        "Attention to detail and craftsmanship are top-notch. My home is both elegant and practical.",
    },
    {
      image: assets.pic6,
      name: "danny",
      location: "Owerri, Nigeria",
      rating: 5,
      message:
        "AsaiHomes redefines Nigerian real estate with integrity and quality. I'm proud of my new home.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-light text-primary px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          What Our Clients Say
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from homeowners who trusted AsaiHomes to bring comfort, luxury,
          and quality to life.
        </p>
      </div>

      {/* Marquee Testimonials */}
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        <div className="flex gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-accent min-w-[300px] max-w-[320px]"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-xs text-dark">{item.location}</p>
                <div className="flex justify-center gap-1 text-accent">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} size={14} fill="#d4af37" />
                    ))}
                </div>
                <p className="text-dark text-sm leading-relaxed mt-2">
                  “{item.message}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonial;
