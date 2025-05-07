import './App.css'
import React from "react";
import Hero from "./components/Hero";
import StickyHeader from "./components/StickyHeader";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4;
      setShowHeader(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
       <StickyHeader visible={showHeader} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
  
}

export default App
