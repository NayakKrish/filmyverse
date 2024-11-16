import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    const bearerAccessToken = process.env?.REACT_APP_TOKEN;
    if (bearerAccessToken) {
      headers.set("authorization", "Bearer " + process.env.REACT_APP_TOKEN);
    }
    return headers;
  },
});

export const baseApiSlice = createApi({
  baseQuery: baseQuery,
  reducerPath: "api",
  endpoints: () => ({}),
});
