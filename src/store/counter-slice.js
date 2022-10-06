import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShowCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    /// in redux toolkit reducer we allow to mutate a state values
    ///// because redux toolkit will cloning a state for us
    ///// and we can only change the value that we only want
    ///// we not want to declare any un-using value anymore
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    INCREMENTBYAMOUNT(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    TOGGLE(state) {
      state.isShowCounter = !state.isShowCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
