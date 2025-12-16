import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-200 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-xl font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">Task</span>Flow
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-8 text-sm font-medium">
           <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Testimonials
          </a>

          <Link
            to="/ai"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            AI Task Suggestions
          </Link>

          {/* CTA */}
        <Link
  to="/signup"
  className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
>
  Sign up
</Link>
  


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
