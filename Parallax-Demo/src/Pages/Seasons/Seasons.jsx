import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import About from "../../components/About/About";
import { v4 as uuid } from "uuid";
import Footer from "../../components/Footer/Footer";
import useLocoScroll from "../../Hooks/useLocoScroll";
import usePreloader from "../../Hooks/usePreloader";
import Navbar from "../../components/Navbar/Navbar";
import TileSection from "../../components/TileSection/TileSection";

const initMenu = [
  { id: uuid(), name: "Featured", link: "featured" },
  { id: uuid(), name: "About", link: "about" },
  { id: uuid(), name: "Gallery", link: "grid" },
];

export default function Seasons() {
  const preloader = usePreloader();
  useLocoScroll(!preloader);
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1 className="loader-title">Welcome</h1>
          <h2 className="loader-subtitle">to my parallax demo</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header menu={initMenu} title="Kia Ora" />
          <Featured />
          <About />
          <TileSection />
          <Footer />
        </div>
      )}
    </>
  );
}
