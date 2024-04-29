import React, { useState, useEffect, useRef } from "react";
import Title from "../Title/Title";
import "./Footer.scss";
import gsap from "gsap";
import useOnScreen from "../../Hooks/useOnScreen";

function Footer() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const endText = document.querySelector("#end-text");

      gsap.to(endText, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);
  const endTextClass = "end-text" + (reveal ? " is-reveal" : "");
  return (
    <section className="footer" data-scroll-section>
      <Title title="The End" />
      <h1 className={endTextClass} id="end-text" ref={ref}>
        Thank You
      </h1>
    </section>
  );
}

export default Footer;
