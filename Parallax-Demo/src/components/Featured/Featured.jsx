import React from "react";
import "./Featured.scss";
import guadeloupe from "/assets/guada.jpg";
import paris from "/assets/tourEiffel.jpg";

function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Guadeloupe</h6>
        <img
          src={guadeloupe}
          alt="Guadeloupe"
          data-scroll
          data-scroll-speed="2"
        />
      </div>
      <div className="featured-column-layout">
        <h6>Paris</h6>
        <img src={paris} alt="Paris" data-scroll data-scroll-speed="3" />
      </div>
    </section>
  );
}

export default Featured;
