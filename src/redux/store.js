import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from "./slice/about";

export const store = configureStore({
  reducer: {
    about: AboutSlice,
  },
});
