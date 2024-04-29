# Animate your App with Locomotive Scroll and Gsap

I made this Vite/React application to demonstrate how you can use `Locomotive Scroll` and `GSAP` to apply smooth scrolling and cool animations and effects to your own app. Each Pages of this Application showcases a different way of using these libraries together. The last page of my application, titled "Animation", is demostrating how you can use the `spring-react-parallax` to animate different images/gifs layers on top of a background. This is a bonus page that is not demonstrated in the video but feel free to have a look at the code and I've set a bonus challenge for you at the end of this file, for those of you who want to apply what you will learn in this demo.

Let's get to it!

Here are the steps to get started with my `Locomotive Scroll` and `GSAP` demo app:

![App](/Parallax-Demo/public/assets/ParallaxDemo.gif)

## Getting Started

Clone the repository to your local machine.

```
git clone https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-Kinzi-c.git
```

Open the **Parallax-Demo** project folder in your code editor.

```
cd Parallax-Demo
```

Install the dependencies by running the following command in your terminal:

```
npm install
```

Start the development server by running the following command in your terminal:

```
npm run dev
```

Open the app in your browser by navigating to [localhost:5173](http://localhost:5173) or whatever other port the app opened on.

Feel free to play around with the code and see how Locomotive Scroll, Gsap and react-spring/parallax are used to accomplish the scrolling and animation effects on the webapp.

## Dependencies

This app was created with:

![Vite](/Parallax-Demo/public/assets/vite.svg) [Vite](https://vitejs.dev/guide/)

and uses the following dependencies:

![React](/Parallax-Demo/public/assets/react.svg)  
[React](https://react.dev/) a JavaScript library for building user interfaces

![locomotive-scroll](/Parallax-Demo/public/assets/loco.png)

[Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) a lightweight scroll animation library that allows smooth-scrolling to be applied to your app.

![Gsap](/Parallax-Demo/public/assets/gsap.png)

[Gsap](https://greensock.com/get-started/) a JavaScript animation library to animate objects without having to write lengthy css code. Easily integrated with Locomotive Scroll to animate objects on scroll events.

![react-spring-parallax](/Parallax-Demo/public/assets/spring-parallax.png)

[react-spring-parallax](https://www.react-spring.dev/docs/components/parallax) a React component library that allows you to create parallax effects. It provides an easy way to create dynamic and interactive parallax effects for your web pages without the need for complex css coding.

## 1. Follow along Tutorial for Locomotive Scroll and Gsap

### Usage

To use Locomotive Scroll, GSAP and react-spring/parallax in your own project, follow these steps:

Install the libraries by running the following command in your terminal:

```
npm install locomotive-scroll
```

```
npm install gsap
```

If you wish to use Sass like in this project please runthe following command in your terminal:

```
npm install sass
```

1. import the LocomotiveScroll and gsap libraries in your React Component

```jsx
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
```

2. The main functionality of the parallax effect is implemented using the LocomotiveScroll library, which provides smooth scrolling functionality. This library is initialised in the useEffect hook with the following configuration:

```jsx
useEffect(() => {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main-container"),
    smooth: true,
  });
}, []);
```

In the above code, we are creating a new instance of Locomotive Scroll with the `el` option set to the #main-container element. This tells Locomotive Scroll to apply smooth scrolling to this element. The smooth option is set to true to enable smooth scrolling.

3. The animation effect itself is created using Gsap's timeline and ScrollTrigger.create functions. The timeline function creates an animation timeline with the following configuration (always run your code in the useEffect hook function to apply the animation after your components are first rendered):

```jsx
useEffect(() => {
  // GSAP animation
  let logoAnimation = gsap
    .timeline({ defaults: { ease: "none" } })
    .to("#react-logo", {
      rotation: 360,
      duration: 10,
      transformOrigin: "center",
      repeat: "-1",
    });
}, []);
```

In this code we are using GSAP to animate the #react-logo element. We are using the gsap.timeline() method to create a new timeline with the defaults option set to { ease: "none" }. This tells GSAP to use no easing for all animations in this timeline. We are then animating the #react-logo element to rotate 360 degrees over a duration of 10 seconds with a transform origin set to "center" and an infinite repeat.

4. The ScrollTrigger library from Gsap is used to create the parallax animation effect. This library is initialised in the useEffect hook as follow:

```jsx
ScrollTrigger.scrollerProxy("#main-container", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});
```

This code sets up a "proxy" for the #main-container element, which enables the ScrollTrigger to control the scrolling behavior of the page.

5. The ScrollTrigger.create function is then used to apply this animation to the svg-logos element when it enters the viewport:

```jsx
ScrollTrigger.create({
  trigger: ".svg-logos",
  start: "80% 80%",
  end: "+=300",
  scroller: "#main-container",
  animation: logoAnimation,
});
```

This code creates a ScrollTrigger that triggers the logoAnimation animation when the .svg-logos element enters the viewport. The animation starts when the element is 80% in view, and ends 300 pixels after the end of the element. The scroller option specifies the element that should be used for scrolling.

6. Finally, the ScrollTrigger.refresh function is called to refresh the ScrollTrigger plugin whenever the window is resized:

```jsx
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
```

This ensures that the parallax effect is correctly recalculated when the size of the page changes.

You now know how to use Locomotive Scroll and GSAP to create smooth scrolling and animations in your React application. Be sure to check out the documentation for [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) and [Gsap](https://greensock.com/get-started/) to learn more about their features and options.

## 2. Bonus: Follow along Tutorial for react-spring/Parallax and Locomotive Scroll animation

### Usage

To use Locomotive Scroll and react-spring/parallax in your own project like in my `Animation` page, follow these steps:

First install the `locomotive-scroll` and `react-spring/parallax` libraries by running the following command in your terminal:

```
npm install locomotive-scroll
```

```
npm install @react-spring/parallax
```

## How it works

Here we use the `@react-spring/parallax` library to create a parallax effect with multiple layers of images.

1. Parallax Component

The Parallax component is the main component that creates the parallax effect. It takes in a pages prop to define how many "pages" the parallax will have, and a style prop to define the style of the parallax.

```jsx
<Parallax pages={2} style={{ padding: "0" }}>
```

2. Parallax Layers

This ParallaxLayer is used to create the background image layer. It has an offset of 0, which means it will be positioned at the top of the parallax. Its speed is set to 1, which means it will move at the same speed as the page scroll. Its factor is set to 3, which means it will have three times the height of the parallax. Finally, its style defines the background image as our Spirited Away image with a backgroundSize of cover to fill the page.

```jsx
<ParallaxLayer
  offset={0}
  speed={1}
  factor={3}
  style={{ backgroundImage: `url(${sen})`, backgroundSize: "cover" }}
></ParallaxLayer>
```

3. Center layer

This ParallaxLayer is used to create the center image layer. It has textAlign set to center, which centers our little chihiro rat's gif on the page. Its sticky prop is set to { start: 0.5, end: 2 }, which means it will stay in place between 0.5 of the parallax height and the end of the parallax.

```jsx
<ParallaxLayer style={{ textAlign: "center" }} sticky={{ start: 0.5, end: 2 }}>
  <img src={chihiro} alt="" width="100px" />
</ParallaxLayer>
```

4. Left Layer

This ParallaxLayer is used to create the left image layer. It has textAlign set to left, which aligns our susuwatari image to the left of the background layer. Its sticky prop is set to { start: 1, end: 1 }, which means it will stay in place at page 1 of the parallax.

```jsx
<ParallaxLayer style={{ textAlign: "left" }} sticky={{ start: 1, end: 1 }}>
  <img src={noireaude} alt="" width="50px" />
</ParallaxLayer>
```

5. Right Layer

This ParallaxLayer is used to create the Right image layer. It has textAlign set to right, which aligns our second susuwatari image to the right. Its sticky prop is set to { start: 1, end: 1 }, which means it will stay in place at page 1 of the parallax.

```jsx
<ParallaxLayer style={{ textAlign: "right" }} sticky={{ start: 1, end: 1 }}>
  <img src={noireaude} alt="" width="50px" />
</ParallaxLayer>
```

### Bonus Challenge

You can now try to use what you just learned to incorporate gsap to the susuwatari images on our `Animation` Page to make them appear only when their element comes into view.

## Conclusion

Thanks for taking the time to check out my smooth scrolling React application. I tried to showcase how Locomotive Scroll and GSAP can work together to apply cool smooth scrolling and animation effects to your app. Feel free to play around with the code and see how Locomotive Scroll, Gsap and react-spring/parallax are used to create dynamic and interactive parallax effects without the need for complex css code.

I hope this demo inspires you to create your own amazing animation effects using `Locomotive Scroll` and `gsap` in your final project!

If you have any questions or feedback, please don't hesitate to reach out kceo161@aucklanduni.ac.nz

![Totoro bye](/Parallax-Demo/public/assets/totoro-bye.gif)
