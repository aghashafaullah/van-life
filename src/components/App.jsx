import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
