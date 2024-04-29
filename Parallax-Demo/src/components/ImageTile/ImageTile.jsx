import React from "react";
import "./ImageTile.scss";

export default function ImageTile({
  imageUrl,
  scrollSpeed,
  scrollTarget,
  scrollDirection,
}) {
  return (
    <>
      <div
        className="tiles-line-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
        data-scroll
        data-scroll-speed={scrollSpeed}
        data-scroll-target={scrollTarget}
        data-scroll-direction={scrollDirection}
      />
    </>
  );
}
