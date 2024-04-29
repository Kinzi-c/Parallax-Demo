import React from "react";
import "./Title.scss";

export default function Title({ title }) {
  return (
    <section>
      <h6 className="section-header">{title}</h6>
    </section>
  );
}
