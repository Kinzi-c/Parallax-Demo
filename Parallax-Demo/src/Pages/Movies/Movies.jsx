import React from "react";
import Header from "../../components/Header/Header";
import { v4 as uuid } from "uuid";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import useLocoScroll from "../../Hooks/useLocoScroll";
import Footer from "../../components/Footer/Footer";
import FeatureContent from "../../components/FeatureContent/FeatureContent";
import usePreloader from "../../Hooks/usePreloader";
import Content from "../../components/Content/Content";
import GridSection from "../../components/GridSection/GridSection";
import Navbar from "../../components/Navbar/Navbar";

export default function Movies() {
  const preloader = usePreloader();
  useLocoScroll(!preloader);
  const initMenu = [
    { id: uuid(), name: "Ghibli" },
    { id: uuid(), name: "Nolan" },
    { id: uuid(), name: "Tarantino" },
  ];
  return (
    <React.Fragment>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1 className="loader-title">Welcome</h1>
          <h2 className="loader-subtitle">to my parallax demo</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header menu={initMenu} title="My Films" />
          <GridSection />
          <FeatureContent />
          <Content />
          <ImageGrid />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}
