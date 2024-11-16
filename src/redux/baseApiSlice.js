import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base query for making API requests
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL, // Set the base URL for API requests (from environment variables)
  prepareHeaders: async (headers) => {
    // Set default headers for all requests
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");

    // Add authorization header if a bearer token is available
    const bearerAccessToken = process.env?.REACT_APP_TOKEN;
    if (bearerAccessToken) {
      headers.set("authorization", "Bearer " + process.env.REACT_APP_TOKEN);
    }
    return headers;
  },
});

// Define the base API slice using Redux Toolkit Query
export const baseApiSlice = createApi({
  baseQuery: baseQuery,
  reducerPath: "api",
  endpoints: () => ({}),
});
