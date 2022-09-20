import React, { useState } from "react";
// import PropTypes from "prop-types";

import ExpensesFilter from "../../Expenses/ExpensesFilter/ExpensesFilter";
import ExpensesList from "../../Expenses/ExpensesList/ExpensesList";
import Card from "../../UI/Card/Card";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

import "./ExpensesContainer.css";

const ExpensesContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const onSelectedYearHandler = (selectedYear) => {
    console.log(selectedYear + " : this year is from state lifted.");
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.expenses.filter((expense) => {
    if (filteredYear !== "all") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return expense;
    }
  });

  return (
    <Card className="expenses-container">
      <ExpensesFilter
        initialYear={filteredYear}
        onSelectedYear={onSelectedYearHandler}
      />

      <ExpensesChart expenses={filterdExpenses} />

      {/* {{{{{{{{{{{{{{{{{{Outputting conditional content}}}}}}}}}}}}}}}}}}}} */}

      {/*Can use if else condition */}
      {/* {filterdExpenses.length === 0 ? (
        <h3 className="no-expenses">No expenses found.</h3>
      ) : (
        filterdExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )
      )} */}

      {/* or standalone condition*/}
      {/* {filterdExpenses.length === 0 && (
        <h3 className="no-expenses">No expenses found.</h3>
      )}

      {filterdExpenses.length > 0 &&
        filterdExpenses.map((expense) =>
          (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )
      } */}

      {/* or use variable */}
      {/* this logic must put on above before return */}
      {/* let returnJSX = (
        <h3 className="expenses-list__fallback">No expenses found.</h3>
      );
      if (props.expenses.length > 0) {
        returnJSX = props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
      } */}
      {/* AND RETURN THIS  */}
      {/* {returnJSX} */}

      <ExpensesList expenses={filterdExpenses} />
    </Card>
  );
};

ExpensesContainer.propTypes = {};

ExpensesContainer.defaultProps = {};

export default ExpensesContainer;
