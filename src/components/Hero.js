import React from "react";
import { motion } from "framer-motion";
import dashboard from "../assets/free-dashboard-templates-1.jpg"; // replace with your image

const Hero = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold tracking-tight text-gray-900 mb-6"
          >
            Manage tasks.  
            <span className="text-blue-600"> Stay focused.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-xl mb-8"
          >
            TaskFlow helps teams plan, track, and deliver work with clarity — all in one intuitive workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Get Started Free
            </button>
            <button className="text-gray-700 font-medium text-sm hover:text-gray-900 transition">
              View Demo →
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={dashboard}
            alt="TaskFlow dashboard preview"
            className="rounded-xl shadow-2xl border border-gray-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
