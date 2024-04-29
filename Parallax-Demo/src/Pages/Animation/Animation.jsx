import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import "./Animation.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function Animation() {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main-container"),
      smooth: true,
    });
    setInterval(() => locoScroll.update(), 1000);
  });
  return (
    <>
      <div
        className="parallax-container"
        id="main-container"
        data-scroll-container
      >
        <Background />
        <Footer />
        <Navbar />
      </div>
    </>
  );
}
