import React from "react";
import ImageTile from "../ImageTile/ImageTile";
import "./ImageTileRow.scss";

export default function ImageTileRow({
  imageUrls,
  scrollSpeed,
  scrollTarget,
  scrollDirection,
}) {
  return (
    <div
      className="tiles-line"
      data-scroll
      data-scroll-speed={scrollSpeed}
      data-scroll-target={scrollTarget}
      data-scroll-direction={scrollDirection}
    >
      {imageUrls.map((url) => (
        <ImageTile key={url} imageUrl={url} />
      ))}
    </div>
  );
}
