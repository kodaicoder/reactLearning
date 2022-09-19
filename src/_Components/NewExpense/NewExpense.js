import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
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

  return (
    <div className="new-expense">
      <ExpenseForm onSavingNewData={saveNewExpenseDataHandler} />
    </div>
  );
};

NewExpense.propTypes = {};

NewExpense.defaultProps = {};

export default NewExpense;
