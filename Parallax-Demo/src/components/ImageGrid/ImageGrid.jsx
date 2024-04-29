import React from "react";
import "./ImageGrid.scss";
import ImageTileRow from "../ImageTileRow/ImageTileRow";

export default function ImageGrid() {
  return (
    <section className="tiles tiles--columns" id="grid3" data-scroll-section>
      <div className="tiles-wrap">
        <ImageTileRow
          imageUrls={[
            "assets/kiki.jpg",
            "assets/mimiwo.jpg",
            "assets/Spirited_Sea.png",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid3"
          scrollDirection="vertical"
        />
        <ImageTileRow
          imageUrls={[
            "assets/sen.jpeg",
            "assets/porco.jpg",
            "assets/ghibli.jpeg",
          ]}
          scrollSpeed={-1}
          scrollTarget="#grid3"
          scrollDirection="vertical"
        />
        <ImageTileRow
          imageUrls={[
            "assets/nausica.jpg",
            "assets/Spirited_Sea.png",
            "assets/ponyo.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid3"
          scrollDirection="vertical"
        />
        <ImageTileRow
          imageUrls={[
            "assets/haoru.jpeg",
            "assets/ghibli.jpeg",
            "assets/nausica.jpg",
          ]}
          scrollSpeed={-1}
          scrollTarget="#grid3"
          scrollDirection="vertical"
        />
      </div>
    </section>
  );
}
