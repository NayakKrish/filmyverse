import React from "react";
import {
  NOW_PLAYING_FILTER,
  POPULAR_FILTER,
  TOP_RATED_FILTER,
  UPCOMING_FILTER,
} from "../constants/filtersConstants";

const Filters = ({ filter, filterSelect = () => {} }) => {
  const buttonStyle =
    "rounded-md py-1 px-2 bg-gray-600 text-white font-medium hover:bg-gray-800 cursor-pointer text-sm md:text-base";
  const activeButtonStyle =
    "rounded-md py-1 px-2 bg-sky-400 text-white font-medium hover:bg-sky-700 cursor-pointer text-sm md:text-base";

  return (
    <div className="flex items-center justify-center gap-3">
      <div
        className={filter === POPULAR_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          filterSelect(POPULAR_FILTER);
        }}
      >
        Popular
      </div>
      <div
        className={
          filter === NOW_PLAYING_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          filterSelect(NOW_PLAYING_FILTER);
        }}
      >
        Now Playing
      </div>
      <div
        className={
          filter === TOP_RATED_FILTER ? activeButtonStyle : buttonStyle
        }
        onClick={() => {
          filterSelect(TOP_RATED_FILTER);
        }}
      >
        Top Rated
      </div>
      <div
        className={filter === UPCOMING_FILTER ? activeButtonStyle : buttonStyle}
        onClick={() => {
          filterSelect(UPCOMING_FILTER);
        }}
      >
        Upcoming
      </div>
    </div>
  );
};

export default Filters;
