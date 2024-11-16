import { configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "./baseApiSlice";

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    // Add the baseApiSlice reducer to the store. This will manage API-related state
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add baseApiSlice middleware to handle caching, invalidation, and other API-related functionality
    getDefaultMiddleware().concat(baseApiSlice.middleware),
});
