import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CollapsibleCard from "./CollapsibleCard";
import { useGetFilteredMoviesQuery } from "../redux/movieApiSlice";
import { useGetSearchedResultQuery } from "../redux/searchApiSlice";
import Filters from "./Filters";
import ScrollToTopButton from "./ScrollToTopButton";

const MoviesList = () => {
  const [filter, setFilter] = useState("popular"); // Stores the selected filter type
  const [pageNo, setPageNo] = useState(1); // Tracks the current page for pagination
  const [moviesData, setMoviesData] = useState([]); // Accumulates movies data for display
  const [searchInputValue, setSearchInputValue] = useState(""); // Stores the current input in the search bar
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the active search query

  // Fetch movies based on the selected filter
  const {
    data: filteredResult,
    error: filterError,
    isFetching: filterIsFetching,
    isLoading: filterIsLoading,
  } = useGetFilteredMoviesQuery(
    { filter: filter, pageNo: pageNo },
    { skip: !filter } // Skip the query if no filter is selected
  );

  // Fetch movies based on the search query
  const {
    data: searchResult,
    error: searchError,
    isLoading: searchIsFetching,
    isFetching: searchIsLoading,
  } = useGetSearchedResultQuery(
    { searchQuery: searchQuery, pageNo: pageNo },
    { skip: searchQuery === "" } // Skip the query if the search query is empty
  );

  // Append new results to moviesData when API results change
  useEffect(() => {
    const results = searchQuery ? searchResult : filteredResult;

    if (results?.results?.length) {
      setMoviesData((prev) => [...prev, ...results.results]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult, filteredResult]);

  // Handles filter selection and resets search-related state
  const handleSelectFilter = (selectedFilter) => {
    if (filter !== selectedFilter) {
      setMoviesData([]);
      setPageNo(1);
      setSearchQuery("");
      setSearchInputValue("");
      setFilter(selectedFilter);
    }
  };

  // Triggers a search and resets filter-related state
  const handleSearch = () => {
    if (searchInputValue !== "" && searchInputValue !== searchQuery) {
      setMoviesData([]);
      setPageNo(1);
      setFilter("");
      setSearchQuery(searchInputValue);
    }
  };

  // Executes search when "Enter" is pressed in the input field
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* searchbar section */}
      <div className="flex flex-col items-center justify-center w-full gap-5 sticky top-0 z-10 bg-[#0a0a0a] h-auto px-2 py-5">
        <div className="flex items-center justify-center w-full gap-3">
          <input
            type="search"
            id="searchbar"
            name="searchbar"
            placeholder="Search Movies"
            className="rounded-md py-1 px-2 w-full md:w-2/6 text-black"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            type="submit"
            className="rounded-md py-1 px-2 bg-sky-400 text-white font-medium hover:bg-sky-700 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* filters section */}
        <Filters filter={filter} handleSelectFilter={handleSelectFilter} />
      </div>
      {/* Error messages */}
      {filterError && (
        <h4>{`${filterError?.status} ${filterError?.data?.status_message}`}</h4>
      )}
      {searchError && (
        <h4>{`${searchError?.status} ${searchError?.data?.status_message}`}</h4>
      )}

      <div className="w-full">
        {/* No results message */}
        {!filteredResult?.results?.length &&
          !searchResult?.results?.length &&
          ((!searchIsLoading && !searchIsFetching) ||
            (!filterIsLoading && !filterIsFetching)) && (
            <h4 className="text-white text-center mt-5">No results found!!</h4>
          )}

        {/* Infinite scrolling component */}
        <InfiniteScroll
          dataLength={moviesData?.length || 0} //This is important field to render the next data
          next={() => setPageNo((prev) => prev + 1)}
          hasMore={
            pageNo < (filteredResult?.total_pages || searchResult?.total_pages) // Check if more pages are available
          }
          loader={
            ((!searchIsLoading && !searchIsFetching) ||
              (!filterIsLoading && !filterIsFetching)) && <h4>Loading...</h4>
          }
          endMessage={
            moviesData?.length > 0 && (
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            ) // Show end message when all items are loaded
          }
          className="p-2 md:p-8 flex flex-col items-center justify-center gap-5"
          scrollThreshold={0.8} // Trigger load when 80% of the page is scrolled
        >
          {/* Render movies in collapsible cards */}
          {moviesData?.length ? (
            moviesData?.map((movie, index) => {
              return (
                <CollapsibleCard
                  key={index}
                  title={movie?.title}
                  year={
                    movie?.release_date && movie?.release_date.split("-")[0]
                  }
                  genre={movie?.genre_ids}
                  director={""}
                  plot={movie?.overview}
                  poster={movie?.poster_path || null}
                />
              );
            })
          ) : (
            <></>
          )}
        </InfiniteScroll>

        {/* Scroll-to-top button */}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default MoviesList;
