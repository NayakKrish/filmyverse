import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CollapsibleCard from "./CollapsibleCard";
import { useGetFilteredMoviesQuery } from "../redux/movieApiSlice";
import { useGetSearchedResultQuery } from "../redux/searchApiSlice";
import Filters from "./Filters";
import ScrollToTopButton from "./ScrollToTopButton";

const MoviesList = () => {
  const [filter, setFilter] = useState("popular");
  const [pageNo, setPageNo] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: filteredResult,
    error: filterError,
    isFetching: filterIsFetching,
    isLoading: filterIsLoading,
  } = useGetFilteredMoviesQuery(
    { filter: filter, pageNo: pageNo },
    { skip: !filter }
  );

  const {
    data: searchResult,
    error: searchError,
    isLoading: searchIsFetching,
    isFetching: searchIsLoading,
  } = useGetSearchedResultQuery(
    { searchQuery: searchQuery, pageNo: pageNo },
    { skip: searchQuery === "" }
  );

  useEffect(() => {
    const results = searchQuery ? searchResult : filteredResult;

    if (results?.results?.length) {
      setMoviesData((prev) => [...prev, ...results.results]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult, filteredResult]);

  const filterSelect = (selectedFilter) => {
    if (filter !== selectedFilter) {
      setMoviesData([]);
      setPageNo(1);
      setSearchQuery("");
      setSearchInputValue("");
      setFilter(selectedFilter);
    }
  };

  const handleSearch = () => {
    if (searchInputValue !== "" && searchInputValue !== searchQuery) {
      setMoviesData([]);
      setPageNo(1);
      setFilter("");
      setSearchQuery(searchInputValue);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* searchbar section with search input and search button */}
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
        <Filters filter={filter} filterSelect={filterSelect} />
      </div>
      {filterError && (
        <h4>{`${filterError?.status} ${filterError?.data?.status_message}`}</h4>
      )}
      {searchError && (
        <h4>{`${searchError?.status} ${searchError?.data?.status_message}`}</h4>
      )}

      <div className="w-full">
        {!filteredResult?.results?.length &&
          !searchResult?.results?.length &&
          ((!searchIsLoading && !searchIsFetching) ||
            (!filterIsLoading && !filterIsFetching)) && (
            <h4 className="text-white text-center mt-5">No results found!!</h4>
          )}
        <InfiniteScroll
          dataLength={moviesData?.length || 0} //This is important field to render the next data
          next={() => setPageNo((prev) => prev + 1)}
          hasMore={
            pageNo < (filteredResult?.total_pages || searchResult?.total_pages)
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
            )
          }
          className="p-2 md:p-8 flex flex-col items-center justify-center gap-5"
          scrollThreshold={0.8}
        >
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
                  poster={movie?.backdrop_path || null}
                />
              );
            })
          ) : (
            <></>
          )}
        </InfiniteScroll>

        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default MoviesList;
