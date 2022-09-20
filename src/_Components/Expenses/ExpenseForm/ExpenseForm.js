import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //can use multiple state it will not overwrite each other<<<
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  ////or single state<<<
  // const [userInput, setUserinput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleChangeHandler = (e) => {
  //   setUserinput((prevState) => {
  //     return { ...prevState, enteredTitle: e.target.value };
  //   });
  // };
  // const amountChangeHandler = (e) => {
  //   setUserinput((prevState) => {
  //     return { ...prevState, enteredAmount: e.target.value };
  //   });
  // };
  // const dateChangeHandler = (e) => {
  //   setUserinput((prevState) => {
  //     return { ...prevState, enteredDate: e.target.value };
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavingNewData(expenseData);

    //clear form (need "value" attribute set in element)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    hideForm(e);
  };

  const hideForm = (e) => {
    props.toggleForm(e);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            aria-label="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            aria-label="Amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            aria-label="Date"
            min="2019-01-01"
            max="2040-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button value={0} onClick={hideForm}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {};

ExpenseForm.defaultProps = {};

export default ExpenseForm;
