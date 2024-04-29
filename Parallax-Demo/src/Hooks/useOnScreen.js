import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Create a new IntersectionObserver object, passing in a callback function
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    const currentRef = ref.current;
    // If the current ref exists, start observing it
    if (currentRef) {
      observer.observe(currentRef);
    }
    // When the component unmounts or the ref changes, stop observing the current ref
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount
  // Return whether the element is currently intersecting with the viewport
  return isIntersecting;
}
export default useOnScreen;
