import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Activities from "./pages/Activities/Activities";
import ActivityDetails from "./pages/Activities/ActivityDetails";

import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Support from "./pages/Support/Support";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />


        {/* ACTIVITIES */}
        <Route
          path="/activities"
          element={<Activities />}
        />

        {/* ACTIVITY DETAILS */}
        <Route
          path="/activities/:slug"
          element={<ActivityDetails />}
        />


        {/* GALLERY */}
        <Route
          path="/galleries"
          element={<Gallery />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />


        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* SUPPORT */}
        <Route
          path="/support"
          element={<Support />}
        />


        {/* UNKNOWN URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

      <Footer />

      <WhatsAppButton />

      {/* Global scroll animation */}
      <ScrollReveal />

    </>
  );
}

export default App;