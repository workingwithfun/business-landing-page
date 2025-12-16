import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AI from "./components/AI";
import Background from "./components/Background";
import AIChat from "./components/AIChat";


function App() {
  return (
    <div className="App relative">
      <Background />  {/* Only once here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Features /><Testimonials /><Pricing /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/aichat" element={<AIChat />} />
      </Routes>
    </div>
  );
}

export default App;
