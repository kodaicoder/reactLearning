import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import CounterSlice from "./counter-slice";

export const store = configureStore({
  //reducer: counterSlice.reducer,
  //OR
  reducer: { counterStore: CounterSlice, authStore: AuthSlice },
});



