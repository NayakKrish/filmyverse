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
      <div
        className={filter === POPULAR_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          handleSelectFilter(POPULAR_FILTER); // Trigger filter selection callback
        }}
      >
        Popular
      </div>
      <div
        className={
          filter === NOW_PLAYING_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          handleSelectFilter(NOW_PLAYING_FILTER);
        }}
      >
        Now Playing
      </div>
      <div
        className={
          filter === TOP_RATED_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          handleSelectFilter(TOP_RATED_FILTER);
        }}
      >
        Top Rated
      </div>
      <div
        className={filter === UPCOMING_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          handleSelectFilter(UPCOMING_FILTER);
        }}
      >
        Upcoming
      </div>
    </div>
  );
};

export default Filters;
