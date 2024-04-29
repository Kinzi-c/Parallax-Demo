import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import icon from "/assets/icon.png";
import { v4 as uuid } from "uuid";

function Navbar() {
  const menuItems = [
    { id: uuid(), title: "Seasons", link: "/seasons" },
    {
      id: uuid(),
      title: "Movies",
      link: "/movies",
    },
    { id: uuid(), title: "Animation", link: "/animation" },
  ];

  const [activeLink, setActiveLink] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    setIsNavbarVisible(currentScrollPos >= navbarHeight);
  };
  return (
    <section
      className={`navbar ${isNavbarVisible ? "visible" : "hidden"} `}
      data-scroll-section
    >
      <div className="logo">
        <NavLink to="/">
          <img className="image" src={icon} alt="icon" />
        </NavLink>
      </div>
      <div>
        <ul className="menu">
          {menuItems ? (
            menuItems.map((item, index) => (
              <li key={item.id}>
                <NavLink
                  id="menu-item"
                  to={item.link}
                  className={activeLink === item.link ? "active" : "inactive"}
                  onClick={() => handleClick(item.link)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))
          ) : (
            <p>No items to display</p>
          )}
        </ul>
      </div>
    </section>
  );
}
export default Navbar;
