import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShowCounter: true };
const initialAuthState = { isAuthenticated: false };

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

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    LOGIN(state) {
      state.isAuthenticated = true;
    },
    LOGOUT(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
  //reducer: counterSlice.reducer,
  //OR
  reducer: { counterStore: counterSlice.reducer, authStore: authSlice.reducer },
});

//////>>>>>>>>BEFORE REDUX TOOL KITS<<<<<<<<<</////

// import { createStore } from "redux";

// const initialState = { counter: 0, isShowCounter: true };

// ////!!!! DONT MUTATE STATE always copy and create new object!!!!
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, isShowCounter: state.isShowCounter };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, isShowCounter: state.isShowCounter };
//   }
//   if (action.type === "INCREMENTBYAMOUNT") {
//     return {
//       counter: state.counter + action.amount,
//       isShowCounter: state.isShowCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       isShowCounter: !state.isShowCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
// // const myFirstSubscriber = () => {
// //   const latestState = store.getState();
// //   console.log(latestState);
// // };

// // store.subscribe(myFirstSubscriber);

// // store.dispatch({ type: "INCREMENT" });
// // store.dispatch({ type: "DECREMENT" });
