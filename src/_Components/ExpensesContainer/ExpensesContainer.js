import React, { useState } from "react";
// import PropTypes from "prop-types";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import "./ExpensesContainer.css";

const ExpensesContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSelectedYearHandler = (selectedYear) => {
    console.log(selectedYear + " : this year is from state lifted.");
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses-container">
      <ExpensesFilter
        initialYear={filteredYear}
        onSelectedYear={onSelectedYearHandler}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

ExpensesContainer.propTypes = {};

ExpensesContainer.defaultProps = {};

export default ExpensesContainer;
