import React, { useEffect, useState } from "react";
import ArrowUpSVG from "../assets/arrow-up-outline.svg";

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        color="white"
      />
    </button>
  );
};

export default ScrollToTopButton;
