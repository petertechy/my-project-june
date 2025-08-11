import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counterSlice.js";

export const store = configureStore({
  reducer: {counterSlice},
});
