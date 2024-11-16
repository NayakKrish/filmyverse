import React from "react";
import {
  NOW_PLAYING_FILTER,
  POPULAR_FILTER,
  TOP_RATED_FILTER,
  UPCOMING_FILTER,
} from "../constants/filtersConstants";

const Filters = ({ filter, handleSelectFilter = () => {} }) => {
  // Common styles for all buttons
  const buttonStyle =
    "rounded-md py-1 px-2 bg-gray-600 text-white font-medium hover:bg-gray-800 cursor-pointer text-sm md:text-base";
  // Styles for the active (selected) button
  const activeButtonStyle =
    "rounded-md py-1 px-2 bg-sky-400 text-white font-medium hover:bg-sky-700 cursor-pointer text-sm md:text-base";

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className={filter === POPULAR_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          handleSelectFilter(POPULAR_FILTER); // Trigger filter selection callback
        }}
        aria-pressed={filter === POPULAR_FILTER}
      >
        Popular
      </button>
      <button
        className={
          filter === NOW_PLAYING_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          handleSelectFilter(NOW_PLAYING_FILTER);
        }}
        aria-pressed={filter === NOW_PLAYING_FILTER}
      >
        Now Playing
      </button>
      <button
        className={
          filter === TOP_RATED_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          handleSelectFilter(TOP_RATED_FILTER);
        }}
        aria-pressed={filter === TOP_RATED_FILTER}
      >
        Top Rated
      </button>
      <button
        className={filter === UPCOMING_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          handleSelectFilter(UPCOMING_FILTER);
        }}
        aria-pressed={filter === UPCOMING_FILTER}
      >
        Upcoming
      </button>
    </div>
  );
};

export default Filters;
