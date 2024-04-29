import React, { useEffect, useRef, useState } from "react";
import Title from "../Title/Title";
import "./About.scss";
import gsap from "gsap";
import useOnScreen from "../../Hooks/useOnScreen";

function About() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const aboutText = document.querySelector("#about-text");
      gsap.to(aboutText, {
        duration: 2,
        y: -50,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  const aboutTextClass = "about-text" + (reveal ? " is-reveal" : "");

  return (
    <section className="about-section" data-scroll-section>
      <Title title="About" />
      <p
        className={aboutTextClass}
        id="about-text"
        ref={ref}
        data-scroll
        data-scroll-speed="1"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        fringilla leo nibh, cursus dapibus dolor posuere id. Phasellus gravida
        mauris ut nunc varius, non cursus velit lacinia. Praesent nec urna ante.
        Integer molestie ante dui, id interdum enim ultricies at. Donec finibus
        fermentum ante, non rhoncus lorem tristique sit amet. Praesent tincidunt
        ullamcorper nibh, vitae molestie mauris euismod a. Sed ut diam faucibus,
        semper nulla a, commodo diam. Quisque feugiat efficitur felis nec
        pharetra. Sed arcu turpis, venenatis a luctus suscipit, rhoncus eu odio.
        Integer scelerisque ligula diam, sed posuere nisl fringilla ut. Sed
        mollis nibh varius, pellentesque nisi sed, molestie turpis. Nullam et
        enim blandit, pretium diam et, cursus nulla. Phasellus vulputate metus
        sed venenatis consectetur. Vestibulum iaculis augue vitae purus mattis
        ullamcorper. Integer placerat augue sed diam luctus, eu pulvinar lacus
        ornare. Phasellus ut suscipit leo. Morbi convallis at felis non
        hendrerit. Vestibulum mollis, ex eu pharetra interdum, lorem augue
        vehicula velit, non semper tortor nibh ut erat.
      </p>
    </section>
  );
}

export default About;
