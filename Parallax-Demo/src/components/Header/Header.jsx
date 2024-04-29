import React, { useEffect } from "react";
import "./Header.scss";
import gsap from "gsap";

function Header({ menu, title }) {
  useEffect(() => {
    const headerText = document.querySelector("#header-text");

    gsap.to(headerText, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <section className="header" data-scroll-section>
      {menu && (
        <ul className="header-menu">
          {menu.map((item, index) => (
            <li key={item.id} id={index} className="menu-item">
              <a className="a" href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <h1 id="header-text" data-scroll data-scroll-speed="4">
        {title}
      </h1>
    </section>
  );
}

export default Header;
