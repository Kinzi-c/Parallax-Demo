import React from "react";
import "./FeatureContent.scss";

export default function FeatureContent() {
  return (
    <section className="content content--feature" data-scroll-section>
      <p
        className="content-breakout content-breakout--big"
        data-scroll
        data-scroll-speed="3"
        data-scroll-direction="horizontal"
      >
        Here are some
      </p>
      <p
        className="content-breakout content-breakout--medium"
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        of my favourite films
      </p>
    </section>
  );
}
