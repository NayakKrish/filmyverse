import { baseApiSlice } from "./baseApiSlice";

// Create a new movie API slice by injecting additional endpoints into the baseApiSlice
const movieApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredMovies: builder.query({
      query: ({ filter, pageNo = 1 }) => ({
        url: `/movie/${filter}?language=en-US&page=${pageNo}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetFilteredMoviesQuery } = movieApiSlice;
