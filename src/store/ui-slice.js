import { createSlice } from "@reduxjs/toolkit";
const uiInitialState = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    TOGGLE(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;