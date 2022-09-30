import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/home/home.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="profile/@:nameID" element={<Home />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
