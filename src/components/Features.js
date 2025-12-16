import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Easy Task Creation",
    description: "Create, organize, and prioritize tasks in seconds.",
    icon: CheckCircle,
  },
  {
    title: "Team Collaboration",
    description: "Assign tasks, share updates, and stay aligned as a team.",
    icon: Users,
  },
  {
    title: "Analytics Dashboard",
    description: "Track progress, productivity, and deadlines with clarity.",
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-200 rounded-full opacity-20 top-10 left-10"
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-blue-300 rounded-full opacity-15 bottom-20 right-20"
          animate={{ x: [0, -15, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        />
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Everything you need to stay productive
          </h2>
          <p className="text-lg text-gray-600">
            TaskFlow helps individuals and teams plan, collaborate, and deliver
            work effortlessly.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 40px rgba(59,130,246,0.2)" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm cursor-pointer transition-all"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <Icon size={24} />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
