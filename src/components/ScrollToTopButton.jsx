import React, { useEffect, useState } from "react";
import ArrowUpSVG from "../assets/arrow-up-outline.svg";

const ScrollToTopButton = () => {
  // State to track whether to show the scroll-to-top button
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect hook to monitor scroll events and show/hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll the page smoothly to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Return null if the button should not be displayed
  if (!showScrollToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-sky-400 hover:bg-sky-700 text-white font-medium rounded-full shadow-lg p-3 text-2xl"
    >
      <img
        src={ArrowUpSVG}
        alt="Scroll to top"
        className="w-6 h-6"
      />
    </button>
  );
};

export default ScrollToTopButton;
