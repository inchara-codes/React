import { configureStore } from "@reduxjs/toolkit";
import conversionReducer from "./coversionSlice"

export const store = configureStore({
  reducer: {
    conversion: conversionReducer,
  }
});