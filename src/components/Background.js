// src/components/Background.js
import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 top-10 left-20"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-15 bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -10, 0] }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
