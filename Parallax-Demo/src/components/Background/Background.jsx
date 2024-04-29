import React from "react";
import "./Background.scss";
import noireaude from "/assets/noireaude.gif";
import chihiro from "/assets/chihiro.gif";
import sen from "/assets/sen.jpeg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Background() {
  return (
    <div className="background-container">
      {/* Create a Parallax component with two pages and no padding. */}
      <Parallax pages={2} style={{ padding: "0" }}>
        {/* Create a ParallaxLayer component for the background image. */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{ backgroundImage: `url(${sen})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        {/* Create a ParallaxLayer component for the center image that is sticky between 0.5 all the way to the end*/}
        <ParallaxLayer
          style={{ textAlign: "center" }}
          sticky={{ start: 0.5, end: 2 }}
        >
          <img src={chihiro} alt="" width="100px" />
        </ParallaxLayer>
        {/* Create a ParallaxLayer component for the left image that is sticky at page 1. */}
        <ParallaxLayer
          style={{ textAlign: "left" }}
          sticky={{ start: 1, end: 1 }}
        >
          <img src={noireaude} alt="" width="50px" />
        </ParallaxLayer>
        {/* Create a ParallaxLayer component for the right image that is sticky at page 1. */}
        <ParallaxLayer
          style={{ textAlign: "right" }}
          sticky={{ start: 1, end: 1 }}
        >
          <img src={noireaude} alt="" width="50px" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
