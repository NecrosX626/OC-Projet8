//Imports Reacts
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Imports CSS
import "./styles/main.css";
//Imports Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Missing from "./pages/Missing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location/:locationID" element={<Location />} />
        <Route path="/About" element={<About />} />
        <Route path="/Missing" element={<Missing />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
