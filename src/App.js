import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import MapPage from "./pages/MapPage";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
