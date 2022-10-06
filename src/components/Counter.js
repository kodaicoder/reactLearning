import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  //dispatch a store for running a data transform function
  const dispatcher = useDispatch();

  ///get data from Redux using useSelector
  const counter = useSelector((state) => state.counterStore.counter);
  const isShowCounter = useSelector(
    (state) => state.counterStore.isShowCounter
  );

  const onAmountChangeHandler = (e) => {
    setAmount(+e.target.value);
  };

  ///increment a counter
  const incrementHandler = () => {
    dispatcher(counterActions.INCREMENT());
  };

  ///decrement a counter
  const decrementHandler = () => {
    dispatcher(counterActions.DECREMENT());
  };

  ///increment a counter by amount
  const incrementByAmountHandler = () => {
    dispatcher(counterActions.INCREMENTBYAMOUNT({ amount }));
  };

  const toggleCounterHandler = () => {
    dispatcher(counterActions.TOGGLE());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByAmountHandler}>Increment By Amount</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={onAmountChangeHandler}
        />
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
