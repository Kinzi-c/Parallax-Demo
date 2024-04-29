import { useState, useEffect, useRef } from "react";

// Custom hook that returns a boolean state indicating whether the preloader is active or not
const usePreloader = () => {
  // Set up state variables for the preloader and the countdown timer
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(4);
  // Set up a ref to store the ID of the interval timer
  const id = useRef(null);
  // Function to clear the interval timer and hide the preloader
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };
  // Set up an interval timer to decrement the countdown timer every second
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  // When the countdown timer reaches 0, clear the interval timer and hide the preloader
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  // Return the state variable indicating whether the preloader is active or not
  return preloader;
};

export default usePreloader;
