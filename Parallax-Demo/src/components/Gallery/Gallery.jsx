import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Gallery.scss";
import useOnScreen from "../../Hooks/useOnScreen";

const images = [
  {
    src: "./assets/guadeloupe.jpg",
    title: "France",
    subtitle: "Guadeloupe",
    category: "Childhood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper cursus nibh, vel tincidunt neque vulputate vel. Sed egestas, magna non ultrices porta, nibh sem scelerisque nisi, id dapibus sem enim lobortis orci. Maecenas eros eros, pretium in accumsan in, dictum at massa. Aenean tincidunt risus eu imperdiet egestas.",
  },
  {
    src: "./assets/parisA.jpg",
    title: "France",
    subtitle: "Paris",
    category: "Teenage Years",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper cursus nibh, vel tincidunt neque vulputate vel. Sed egestas, magna non ultrices porta, nibh sem scelerisque nisi, id dapibus sem enim lobortis orci. Maecenas eros eros, pretium in accumsan in, dictum at massa. Aenean tincidunt risus eu imperdiet egestas.",
  },
  {
    src: "./assets/fushimiInari.jpg",
    title: "Japan",
    subtitle: "Kyoto",
    category: "Tweenage Years",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper cursus nibh, vel tincidunt neque vulputate vel. Sed egestas, magna non ultrices porta, nibh sem scelerisque nisi, id dapibus sem enim lobortis orci. Maecenas eros eros, pretium in accumsan in, dictum at massa. Aenean tincidunt risus eu imperdiet egestas.",
  },
  {
    src: "./assets/nzl.jpg",
    title: "New Zealand",
    subtitle: "Auckland",
    category: "Adulthood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper cursus nibh, vel tincidunt neque vulputate vel. Sed egestas, magna non ultrices porta, nibh sem scelerisque nisi, id dapibus sem enim lobortis orci. Maecenas eros eros, pretium in accumsan in, dictum at massa. Aenean tincidunt risus eu imperdiet egestas.",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  description,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  const galleryClass = "gallery-item-wrapper" + (onScreen ? " is-reveal" : "");
  return (
    <div className={galleryClass} ref={ref}>
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div></div>
      </div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      console.log({ sections });

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };
  return (
    <section className="section-wrapper gallery-wrap" data-scroll-section>
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
