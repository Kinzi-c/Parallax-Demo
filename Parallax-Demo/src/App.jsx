import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import "./App.scss";
import Seasons from "./Pages/Seasons/Seasons";
import Movies from "./Pages/Movies/Movies";
import Animation from "./Pages/Animation/Animation";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
