import React from "react";
import ImageTileRow from "../ImageTileRow/ImageTileRow";
import "./TileSection.scss";

export default function TilesSection() {
  return (
    <section className="tiles" id="grid" data-scroll-section>
      <div className="tiles-wrap">
        <ImageTileRow
          imageUrls={[
            "assets/fushimiInari.jpg",
            "assets/tourEiffel.jpg",
            "assets/guada.jpg",

            "assets/Paris.jpg",
            "assets/guadeloupe.jpg",
            "assets/nzl.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/Paris.jpg",
            "assets/fushimiInari.jpg",
            "assets/guadeloupe.jpg",
            "assets/nzl.jpg",
            "assets/tourEiffel.jpg",
            "assets/guada.jpg",
          ]}
          scrollSpeed={2}
          scrollTarget="#grid"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/guadeloupe.jpg",
            "assets/nzl.jpg",

            "assets/Paris.jpg",

            "assets/fushimiInari.jpg",
            "assets/guada.jpg",
            "assets/tourEiffel.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid"
          scrollDirection="horizontal"
        />
      </div>
    </section>
  );
}
