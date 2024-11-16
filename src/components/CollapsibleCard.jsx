import React, { useState, useRef } from "react";

function CollapsibleCard({ title, year, genre, director, plot, poster }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // Toggle function to expand/collapse the card
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      onClick={toggleExpand}
      className="cursor-pointer rounded-md bg-gray-800 text-white p-4 shadow-sky-glow transform transition-all duration-200 ease-in-out hover:scale-102 hover:shadow-sky-glow-hover flex flex-col items-center w-full md:w-2/5"
    >
      <h4>{title}</h4>

      {/* Collapsible content container */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        {/* {isExpanded && ( */}
        <div
          className={`mt-2 text-sm text-gray-300 flex flex-col items-center justify-center gap-2`}
        >
          {poster && (
            <img
              src={`https://image.tmdb.org/t/p/original/${poster}`}
              alt="poster"
              className="h-52 rounded-md"
            />
          )}
          <p>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Director:</strong> {director}
          </p>
          <p className="text-center">{plot}</p>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default CollapsibleCard;
