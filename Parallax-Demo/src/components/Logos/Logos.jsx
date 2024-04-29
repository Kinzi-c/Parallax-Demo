import React from "react";
import "./Logos.scss";
import viteLogo from "/assets/vite.svg";
import reactLogo from "/assets/react.svg";

export default function Logos() {
  return (
    <section className="svg-logos" data-scroll-section>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" id="vite-logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" id="react-logo" alt="React logo" />
      </a>
    </section>
  );
}
