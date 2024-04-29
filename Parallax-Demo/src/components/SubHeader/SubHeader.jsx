import React from "react";
import "./SubHeader.scss";

export default function SubHeader({ title, subtitle }) {
  return (
    <section className="header-container" data-scroll-section>
      <h1 className="header-text">{title}</h1>
      <h2 className="header-subtitle">{subtitle}</h2>
    </section>
  );
}
