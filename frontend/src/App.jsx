import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CompressImagePage from "./components/CompressImagePage.jsx";
import ImageConverterForm from "./components/ImageConverterForm";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/compress" element={<CompressImagePage />} />
        <Route path="/conversion" element={<ImageConverterForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
