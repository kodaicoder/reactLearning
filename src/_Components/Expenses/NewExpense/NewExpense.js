import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../../Expenses/ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);

  const saveNewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random() * 100000000000) + 1).toString(),
    };
    console.log(
      "%cthis data is coming from 'ExpenseForm'.(ExpenseForm >>> NewExpense)",
      "background:rgb(0,0,0); color:rgb(0,255,0)"
    );
    console.log(expenseData);

    props.addingExpense(expenseData);
  };

  const toggleFormHandler = (e) => {
    e.preventDefault();
    debugger;
    setFormActive(!!Number(e.target.value));
  };

  if (!formActive) {
    return (
      <div className="new-expense">
        <button type="button" value={1} onClick={toggleFormHandler}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSavingNewData={saveNewExpenseDataHandler}
          toggleForm={toggleFormHandler}
        />
      </div>
    );
  }
};

NewExpense.propTypes = {};

NewExpense.defaultProps = {};

export default NewExpense;
