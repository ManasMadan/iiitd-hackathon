import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Card from "./components/Card";
import OurMission from "./components/OurMission";
import OurVission from "./components/OurVission";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (section) {
          if (section.isIntersecting) {
            section.target.className = "active";
          }
        });
      },
      { threshold: 0.8 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingSection />
              <Card />
            </>
          }
        />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/vision" element={<OurVission />} />
      </Routes>
      <Footer />
    </div>
  );
}
