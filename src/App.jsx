"use client";

import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ExamSection from "./components/ExamSection";
import CardSlider from "./components/CardSlider";
import StatsSection from "./components/StatsSection";
import FaqSection from "./components/FaqSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <Navbar isMobile={isMobile} />
      <HeroSlider />
      <ExamSection />
      <CardSlider />
      <StatsSection />
      <FaqSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
