import React from "react";
import { motion } from "framer-motion";
import { Cpu, Clock, BarChart2, Zap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const aiFeatures = [
  {
    title: "Smart Task Suggestions",
    description: "AI recommends the most important tasks based on your workflow.",
    icon: <Cpu className="text-blue-600 w-10 h-10 animate-bounce-slow" />,
  },
  {
    title: "Predictive Analytics",
    description: "Get insights about deadlines and productivity trends.",
    icon: <BarChart2 className="text-blue-600 w-10 h-10 animate-bounce-slow" />,
  },
  {
    title: "Automated Reminders",
    description: "Never miss a task with intelligent notifications.",
    icon: <Clock className="text-blue-600 w-10 h-10 animate-bounce-slow" />,
  },
  {
    title: "Boost Productivity",
    description: "AI identifies bottlenecks and suggests workflow improvements.",
    icon: <Zap className="text-blue-600 w-10 h-10 animate-bounce-slow" />,
  },
];

const AISection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <circle cx="15%" cy="25%" r="180" fill="#93c5fd" />
          <circle cx="85%" cy="75%" r="130" fill="#bfdbfe" />
          <circle cx="50%" cy="50%" r="100" fill="#dbeafe" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            AI-Powered Productivity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Let AI assist your team by recommending tasks, tracking productivity, 
            and keeping everyone on schedule—smart, simple, and reliable.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            href="#signup"
          >
            Try AI Features Now
          </motion.a>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 40px rgba(59,130,246,0.2)" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 cursor-pointer flex flex-col items-center text-center transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating AI Chat Icon */}
      <Link
        to="/aichat"
        className="fixed bottom-8 right-8 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition z-50"
      >
        <MessageCircle className="text-white w-8 h-8" />
      </Link>
    </section>
  );
};

export default AISection;
