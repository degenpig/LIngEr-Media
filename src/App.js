import "./assets/css/style.css";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Media from "./pages/Media";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="media" element={<Media />} />
      </Routes>
    </>
  );
};

export default App;
