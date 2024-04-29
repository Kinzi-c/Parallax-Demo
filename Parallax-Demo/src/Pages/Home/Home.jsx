import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import Text from "../../components/Text/Text";
import SubHeader from "../../components/Subheader/SubHeader";
import Logos from "../../components/Logos/Logos";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../../components/Footer/Footer";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialise LocomotiveScroll to target the the main-container element
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main-container"),
      smooth: true,
    });
    // Update the ScrollTrigger on every LocomotiveScroll scroll event
    locoScroll.on("scroll", ScrollTrigger.update);
    // Set up a scroller proxy for ScrollTrigger, which allows it to work with LocomotiveScroll
    ScrollTrigger.scrollerProxy("#main-container", {
      scrollTop(value) {
        // If there is an argument, scroll to that position with no duration or easing
        // Otherwise, return the current scroll position
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      // This function returns the dimensions of the viewport
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    // Create a GSAP timeline to animate the react logo
    let logoAnimation = gsap
      .timeline({ defaults: { ease: "none" } })
      .to("#react-logo", {
        rotation: 360, // Rotate the React logo 360 degrees
        duration: 10, // Animate over 10 seconds
        transformOrigin: "center", // Apply rotation from center of image
        repeat: "-1", // repeat animation indefinitely
      });
    // Create a ScrollTrigger to animate the logos when they enter the viewport
    ScrollTrigger.create({
      trigger: ".svg-logos",
      start: "80% 80%", // The trigger point for the animation
      end: "+=300", // The end point for the animation
      scroller: "#main-container", // Use the LocomotiveScroll container as the scroller
      animation: logoAnimation, // The animation to be applied
    });
    // Refresh the ScrollTrigger on LocomotiveScroll refresh events
    locoScroll.update();
    ScrollTrigger.refresh();
  });

  return (
    <React.Fragment>
      <div className="main-container" id="main-container" data-scroll-container>
        <Navbar />
        <SubHeader
          title="Parallax Demo"
          subtitle="Locomotive Scroll and Gsap"
        />
        <Text />
        <Logos />
        <Text />
        <Footer />
      </div>
    </React.Fragment>
  );
}
