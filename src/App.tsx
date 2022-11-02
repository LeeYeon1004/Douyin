import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/home.template";
import Following from "./app/core/components/sidebars/following/following.template";
import ForYou from "./app/core/components/sidebars/for-you/forYou.template";
import Profile from "./app/pages/profile.template";

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
          <Route path="/:user" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
