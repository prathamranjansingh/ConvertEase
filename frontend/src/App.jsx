import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompressImagePage from "./components/CompressImagePage.jsx";
import ImageConverterForm from "./components/ImageConverterForm";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/compress" element={<CompressImagePage />} />
        <Route path="/conversion" element={<ImageConverterForm />} />
      </Routes>
    </div>
  );
};

export default App;
