import React from "react";
import "./Content.scss";

function Content() {
  return (
    <section className="content content--numbered" data-scroll-section>
      <p className="content-text" data-scroll data-scroll-speed="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
        fringilla metus, vitae tempus mi. Nam congue urna non erat varius
        sagittis. Maecenas at nunc leo. Cras eget tellus pretium, vestibulum mi
        et, dapibus lectus. Suspendisse egestas in odio sit amet malesuada.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec dignissim, mauris et imperdiet facilisis,
        dui lacus iaculis dolor, a interdum lectus erat sit amet leo. Nulla
        elementum augue ac lacus efficitur fermentum eget ac leo. Nam convallis,
        felis in eleifend porttitor, tellus ante tristique tellus, a porta lorem
        diam eget est. In hac habitasse platea dictumst. Etiam id sapien a sem
        consequat porttitor vel a elit. Aenean vehicula, elit non scelerisque
        interdum, dui ligula commodo massa, in aliquet lorem lacus eu justo.
        Donec rhoncus cursus pretium. Vivamus sed velit vel lectus posuere
        porttitor. Phasellus dapibus arcu id est dignissim, eu vehicula enim
        imperdiet. Duis malesuada est dui, quis blandit nulla interdum sit amet.{" "}
      </p>
    </section>
  );
}

export default Content;
