import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Media from "./pages/Media";
import './assets/font/MonumentExtended-Regular.otf';
// import './css/style.css';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}>
        <Route path="media" element={<Media />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
