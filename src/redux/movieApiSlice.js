import { baseApiSlice } from "./baseApiSlice";

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