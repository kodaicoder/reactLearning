import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../../Expenses/ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0)
    return <h3 className="expenses-list__fallback">No expenses found.</h3>;

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

ExpensesList.propTypes = {};

ExpensesList.defaultProps = {};

export default ExpensesList;
