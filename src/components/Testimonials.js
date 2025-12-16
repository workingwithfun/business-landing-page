import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Acme Corp",
    quote: "TaskFlow has completely transformed how our team plans and delivers work.",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Operations Manager, Flowify",
    quote: "Simple to use, powerful under the hood, and beautifully designed.",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Product Lead, Nova",
    quote: "The clarity TaskFlow gives our projects is unmatched.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Founder, Startly",
    quote: "We onboarded our entire team in under an hour. Outstanding experience.",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-20 top-10 left-5"
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-300 rounded-full opacity-15 bottom-20 right-10"
          animate={{ x: [0, -15, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "loop" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">
            What Our Users Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by professionals and teams worldwide.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-10 shadow-lg relative z-10"
            >
              {/* Rating */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="mx-0.5"
                    >
                      <Star size={18} fill="currentColor" />
                    </motion.div>
                  )
                )}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                “{testimonials[index].quote}”
              </p>

              {/* User */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="h-14 w-14 rounded-full border border-gray-200"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[index].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
