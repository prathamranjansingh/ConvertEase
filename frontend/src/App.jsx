import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CompressImagePage from "./components/CompressImagePage.jsx";
import ImageConverterForm from "./components/ImageConverterForm";
import Home from "./components/Home.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/compress" element={<CompressImagePage />} />
      <Route path="/conversion" element={<ImageConverterForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
