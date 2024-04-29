import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    // Declare a variable to hold Locomotive Scroll instance
    let locoScroll = null;
    // Select the DOM element to be scrolled
    const scrollEl = document.querySelector("#main-container");

    // Create a new Locomotive Scroll instance
    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    // Update ScrollTrigger when Locomotive Scroll is scrolled
    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Create a scroller proxy for ScrollTrigger to use
    ScrollTrigger.scrollerProxy(scrollEl, {
      // Define a scrollTop function that returns the vertical scroll position
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      // Define a scrollLeft function that returns the horizontal scroll position (not used in code yet)
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });
  }, [start]);
}
