import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "For individuals getting started",
    features: ["Up to 5 users", "Unlimited tasks", "Basic support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams",
    features: ["Unlimited users", "Advanced analytics", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background floating shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-20 top-10 left-10"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-300 rounded-full opacity-15 bottom-20 right-10"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose a plan that fits your team today. Upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border p-8 shadow-sm hover:shadow-xl transition-all ${
                plan.highlighted
                  ? "border-blue-600 ring-1 ring-blue-600"
                  : "border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <span className="absolute top-4 right-4 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline mb-6 justify-center">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="ml-1 text-gray-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full rounded-md px-4 py-3 text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
