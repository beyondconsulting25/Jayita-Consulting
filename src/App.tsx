import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ValueAndExposure from "./components/ValueAndExposure";
import Portfolio from "./components/Portfolio";
import Infographic from "./components/Infographic";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import PitchDeckPage from "./components/PitchDeckPage";
import FullPortfolioPage from "./components/FullPortfolioPage";
import AwardsPage from "./components/AwardsPage";
import ValuePropositionsPage from "./components/ValuePropositionsPage";
import InternationalExposurePage from "./components/InternationalExposurePage";
import FullServicesPage from "./components/FullServicesPage";
import EngagementModel from "./components/EngagementModel";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "pitch-deck" | "portfolio" | "awards" | "value-propositions" | "international-exposure" | "services-page">("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleNavigateToContact = () => {
    setCurrentPage("home");
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const handleNavigateToPitchDeckSection = (sectionId: "pitch-deck-readiness" | "dilution-modeler") => {
    setCurrentPage("pitch-deck");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-text-main font-sans selection:bg-red selection:text-white overflow-x-hidden">
      {/* 1. Header Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* 2. Main Page Content (Conditional Rendering) */}
      <main className="flex-grow">
        {currentPage === "pitch-deck" ? (
          <div className="animate-fadeIn">
            <PitchDeckPage onNavigateToContact={handleNavigateToContact} />
          </div>
        ) : currentPage === "portfolio" ? (
          <div className="animate-fadeIn">
            <FullPortfolioPage 
              onBackToHome={() => setCurrentPage("home")} 
              onNavigateToContact={handleNavigateToContact}
            />
          </div>
        ) : currentPage === "awards" ? (
          <div className="animate-fadeIn">
            <AwardsPage onBackToHome={() => setCurrentPage("home")} />
          </div>
        ) : currentPage === "value-propositions" ? (
          <div className="animate-fadeIn">
            <ValuePropositionsPage onBackToHome={() => setCurrentPage("home")} />
          </div>
        ) : currentPage === "international-exposure" ? (
          <div className="animate-fadeIn">
            <InternationalExposurePage onBackToHome={() => setCurrentPage("home")} />
          </div>
        ) : currentPage === "services-page" ? (
          <div className="animate-fadeIn">
            <FullServicesPage onBackToHome={() => setCurrentPage("home")} onNavigateToContact={handleNavigateToContact} />
          </div>
        ) : (
          <div className="animate-fadeIn">
            {/* Hero Section with interactive Canvas background */}
            <Hero />

            {/* About Section (Two Decades of Results & Core Competencies) */}
            <About />

            {/* Services Section (Strategic Service Pillars) */}
            <Services onExploreServices={() => setCurrentPage("services-page")} />

            {/* Engagement Model Section (Flexible Structures for Scale) */}
            <EngagementModel />

            {/* Value Propositions & International Exposure Sections */}
            <ValueAndExposure isTeaser onNavigate={(page) => setCurrentPage(page)} />

            {/* Portfolio Section (Impact at Scale & Filterable Projects) */}
            <Portfolio onExploreMore={() => setCurrentPage("portfolio")} />

            {/* Infographic Stats Banner (Impact by the Numbers) */}
            <Infographic />

            {/* Testimonial Carousel (Client Success Stories) */}
            <Testimonials />

            {/* Booking Consultation Form (Ready to Scale & Value Props) */}
            <Contact onNavigateToPitchDeckSection={handleNavigateToPitchDeckSection} />
          </div>
        )}
      </main>

      {/* 3. Footer Branding & Policies */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
