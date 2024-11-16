import { baseApiSlice } from "./baseApiSlice";

// Create a new search API slice by injecting additional endpoints into the baseApiSlice
const searchApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchedResult: builder.query({
      query: ({ searchQuery, pageNo = 1 }) => ({
        url: `search/movie?query=${searchQuery}&language=en-US&page=${pageNo}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetSearchedResultQuery } = searchApiSlice;
