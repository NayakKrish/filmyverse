import React, { useState, useRef } from "react";
import { genres } from "../constants/genresConstants";

function CollapsibleCard({ movieDetails }) {
  // console.log("movieDetails", movieDetails);
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the card is expanded or collapsed
  const contentRef = useRef(null); // Reference to the collapsible content for dynamic height calculation

  // Toggle function to expand/collapse the card
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // expand/collapse the card when "Enter" is pressed
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpand();
    }
  };

  return (
    <div
      role="button" // Define as an interactive element
      tabIndex={0} // Make focusable with Tab key
      aria-expanded={isExpanded} // Indicate expanded/collapsed state
      aria-controls={`collapsible-content-${movieDetails?.id}`} // Associate with collapsible content
      onClick={toggleExpand}
      className="cursor-pointer rounded-md bg-gray-800 text-white p-4 shadow-sky-glow transform transition-all duration-200 ease-in-out hover:scale-102 hover:shadow-sky-glow-hover flex flex-col items-center w-full md:w-2/5"
      onKeyDown={handleKeyPress}
    >
      {/* Card title */}
      <h4>{movieDetails?.title}</h4>

      {/* Collapsible content container */}
      <div
        id={`collapsible-content-${movieDetails?.id}`} // Unique ID for ARIA control
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        {/* Content inside the collapsible section */}
        <div
          className={`mt-2 text-sm text-gray-300 flex flex-col items-center justify-center gap-2`}
          aria-live="polite" // Announce dynamic content for screen readers
        >
          {movieDetails?.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt={`Poster of ${movieDetails?.title}`}
              className="h-52 rounded-md"
            />
          )}
          <p>
            <strong>Release Date:</strong> {movieDetails?.release_date}
          </p>
          {movieDetails?.genre_ids && (
            <p>
              <strong>Genre:</strong>{" "}
              {movieDetails?.genre_ids.map((genreId, index, array) => {
                // Find the genre by ID
                const genre = genres.find((g) => g.id === genreId);
                // If genre is found, return its name, otherwise return "Unknown Genre"
                const genreName = genre ? genre.name : "Unknown Genre";

                return (
                  <span key={genreId}>
                    {genreName}
                    {index < array.length - 1 && " | "}{" "}
                    {/* Add ' | ' only if it's not the last genre */}
                  </span>
                );
              })}
            </p>
          )}
          <p>
            <strong>Vote Avg:</strong> {movieDetails?.vote_average}
          </p>
          <p>
            <strong>Vote Count:</strong> {movieDetails?.vote_count}
          </p>
          <p>
            <strong>Original Language:</strong>{" "}
            {movieDetails?.original_language}
          </p>
          <p className="text-center">{movieDetails?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleCard;
