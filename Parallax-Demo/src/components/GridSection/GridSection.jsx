import React from "react";
import "./GridSection.scss";
import ImageTileRow from "../ImageTileRow/ImageTileRow";

export default function GridSection() {
  return (
    <section className="tiles tiles--rotated" id="grid2" data-scroll-section>
      <div className="tiles-wrap">
        <ImageTileRow
          imageUrls={[
            "assets/arrival.jpg",
            "assets/django.jpg",
            "assets/eeato.jpg",
            "assets/johnWick.jpg",
            "assets/killBill.jpg",
            "assets/matrix.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid2"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/johnWick.jpg",
            "assets/killBill.jpg",
            "assets/matrix.jpg",
            "assets/parasite.jpg",
            "assets/lost-in-translation.jpg",
            "assets/eeato.jpg",
          ]}
          scrollSpeed={-1}
          scrollTarget="#grid2"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/arrival.jpg",
            "assets/django.jpg",
            "assets/eeato.jpg",
            "assets/johnWick.jpg",
            "assets/killBill.jpg",
            "assets/matrix.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid2"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/eeato.jpg",
            "assets/interstellar.png",
            "assets/boy.jpg",
            "assets/arrival.jpg",
            "assets/django.jpg",
            "assets/matrix.jpg",
          ]}
          scrollSpeed={-1}
          scrollTarget="#grid2"
          scrollDirection="horizontal"
        />
        <ImageTileRow
          imageUrls={[
            "assets/interstellar.png",
            "assets/matrix.jpg",
            "assets/parasite.jpg",
            "assets/django.jpg",
            "assets/eeato.jpg",
          ]}
          scrollSpeed={1}
          scrollTarget="#grid2"
          scrollDirection="horizontal"
        />
      </div>
    </section>
  );
}
