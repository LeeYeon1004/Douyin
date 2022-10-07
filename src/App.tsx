import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/home.template";
import Following from "./app/core/components/following/following.template";
import ForYou from "./app/core/components/for-you/forYou.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ForYou />} />
            <Route path="/following" element={<Following />} />
            <Route path="/live" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
